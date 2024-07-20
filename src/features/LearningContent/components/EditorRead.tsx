'use client';
import ReactMarkdown from 'react-markdown';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGetContentById } from '../hooks';
import Image from 'next/image';
import { Avatar } from '@nextui-org/react';
import { formatDate } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import './style/style.css';

const EditorRead = () => {
  const param = useSearchParams();
  const idContent = parseInt(param.get('id') ?? '');
  const { push } = useRouter();
  const { data: contentData, isSuccess } = useGetContentById(idContent);

  return (
    <div className="flex w-3/4 flex-col gap-6 lg:w-4/6 2xl:w-1/2">
      {isSuccess && contentData.thumbnail && (
        <div className="h-80 w-full rounded-xl">
          <div className="relative h-full w-full overflow-hidden rounded-xl border-2">
            <Image
              src={contentData?.thumbnail}
              alt="thumbnail"
              layout="fill"
              className="absolute inset-0 h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      )}
      <div className="relative">
        <ArrowLeft
          className="absolute -left-16 top-1 cursor-pointer"
          size={48}
          onClick={() => {
            push('/belajar');
          }}
        />
        <h1 className="mb-2 text-5xl font-semibold leading-tight">
          {contentData?.title}
        </h1>
        <div className="flex items-center gap-4">
          <Avatar name={contentData?.user} />
          <div className="text-sm">
            <div>{contentData?.user}</div>
            <div>{formatDate(contentData?.created_at)}</div>
          </div>
        </div>
      </div>
      <hr />
      <ReactMarkdown>{contentData?.content}</ReactMarkdown>
    </div>
  );
};

export default EditorRead;
