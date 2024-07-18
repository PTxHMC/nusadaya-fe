'use client';
import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useFormik } from 'formik';
import { Button, Checkbox, CheckboxGroup } from '@nextui-org/react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useCreateContent, useGetCategories } from '../hooks';
import { Send } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const Editor = () => {
  const [imageUrl, setImageUrl] = useState('');

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: 'paragraph',
        content: 'Ketikkan isi di sini...'
      }
    ]
  });

  const { mutate: createContent } = useCreateContent({
    onSuccess: (data: any) => {
      console.log('success', data);
    },
    onError: (error: any) => {
      console.log(error);
    }
  });

  const { data: categories, isSuccess } = useGetCategories();

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      thumbnail: null,
      categories: []
    },
    onSubmit: (values: any) => {
      createContent(values);
      console.log(values);
    }
  });

  const handleForm = (e: any) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };
  const handleFileInput = (e: any) => {
    const file = e.target.files[0];

    setImageUrl(URL.createObjectURL(file));

    formik.setFieldValue('thumbnail', file);
  };
  const handleCategory = (e: any) => {
    const { value, checked } = e.target;
    const { categories } = formik.values;

    if (checked) {
      formik.setFieldValue('categories', [...categories, value]);
    } else {
      formik.setFieldValue(
        'categories',
        categories.filter((category: string) => category !== value)
      );
    }
  };
  const handleBlockNote = async () => {
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    formik.setFieldValue('content', markdown);
    console.log(markdown);
  };

  return (
    <div className="mt-16">
      {imageUrl ? (
        <div className="h-80 w-full rounded-xl px-6">
          <div className="relative h-full w-full overflow-hidden rounded-xl border-2">
            <Image
              src={imageUrl}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 h-full w-full rounded-xl"
            />
          </div>
        </div>
      ) : null}
      <form
        onSubmit={formik.handleSubmit}
        className="mx-6 rounded-2xl bg-white shadow-md shadow-primary-2"
      >
        <div className="flex flex-col justify-center gap-3 border-b-2 px-12 py-8 sm:flex-row sm:items-center">
          <ReactTextareaAutosize
            name="title"
            className="w-full resize-none text-4xl font-semibold outline-none"
            placeholder="Ketikkan Judul di sini..."
            onChange={handleForm}
          ></ReactTextareaAutosize>
          <div className="flex gap-3">
            <Button
              variant="bordered"
              className="border-[#6B6673] text-[#6B6673]"
            >
              Kembali
            </Button>
            <Button
              type="submit"
              className="bg-primary-1 text-white"
              startContent={<Send size={16} />}
            >
              Post Content
            </Button>
          </div>
        </div>
        <Button className="mx-12 mt-4 bg-primary-1 text-white">
          <label htmlFor="thumbnail" className="cursor-pointer">
            Masukkan Thumbnail
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              hidden
              onChange={handleFileInput}
            />
          </label>
        </Button>
        <div className="mt-4 flex gap-2 px-12">
          <CheckboxGroup
            label="Kategori"
            orientation="horizontal"
            color="default"
          >
            {isSuccess ? (
              categories.map((item: any) => (
                <Checkbox
                  key={item.id}
                  value={item.id}
                  onChange={handleCategory}
                  checked={formik.values.categories.includes(item.id)}
                >
                  {item.name}
                </Checkbox>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </CheckboxGroup>
        </div>
        <div className="my-4 flex flex-col gap-4">
          <BlockNoteView
            onChange={handleBlockNote}
            editor={editor}
            theme={'light'}
          />
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Editor;
