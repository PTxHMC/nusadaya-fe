'use client';
import NavigationBar from '@/components/navigation-bar';
import { useSearchParams } from 'next/navigation';
import { useGetContentById } from '../hooks';
import ReactMarkdown from 'react-markdown';
import './style/style.css';
import Image from 'next/image';
import { Avatar } from '@nextui-org/react';
import { formatDate } from '@/lib/utils';

const ReadPage = () => {
  const param = useSearchParams();
  const idContent = parseInt(param.get('id') ?? '');
  const { data: contentData, isSuccess } = useGetContentById(idContent);
  console.log(contentData);

  return (
    <div className="h-screen bg-[url('/assets/bg-base.png')]">
      <NavigationBar />
      <div className="mt-14 flex flex-col items-center">
        <div className="flex w-3/4 flex-col gap-6 lg:w-4/6 2xl:w-1/2">
          {isSuccess && contentData.thumbnail ? (
            <div className="h-80 w-full rounded-xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl border-2">
                <Image
                  src={contentData?.thumbnail}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 h-full w-full rounded-xl"
                />
              </div>
            </div>
          ) : null}
          <div>
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
      </div>
    </div>
  );
};

export default ReadPage;
