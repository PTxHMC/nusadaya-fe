'use client';
import { Avatar, Button, Card, CardBody } from '@nextui-org/react';
import React from 'react';
import { useGetContents } from '../../hooks';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import placeholderThumbnail from '@/assets/image-placeholder.png';

const MateriSemua = () => {
  const { data: contentData, isSuccess } = useGetContents();

  const { push } = useRouter();

  const toRead = (id: number) => {
    push(`/belajar/read?id=${id}`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mx-6 flex flex-col gap-8 border-t-1">
        <h1 className="mt-4 text-2xl font-bold text-primary-text">
          Materi Pilihan Untuk Anda
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {isSuccess &&
            contentData.map((item: any) => (
              <div
                key={item.id}
                onClick={() => {
                  toRead(item.id);
                }}
                className="cursor-pointer"
              >
                <Card>
                  <CardBody className="gap-2 p-4">
                    <div className="h-56 w-full">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={item.thumbnail || placeholderThumbnail}
                          layout="fill"
                          alt="Content"
                          blurDataURL={placeholderThumbnail.blurDataURL}
                          placeholder="blur"
                          className="absolute inset-0 h-full w-full rounded-lg object-cover"
                        />
                      </div>
                    </div>
                    <h1 className="line-clamp-2 text-lg font-bold">
                      {item.title}
                    </h1>
                    <div className="flex items-center gap-2">
                      <Avatar name={item.user} size="sm" />
                      <div className="text-xs">
                        <div>{item.user}</div>
                        <div>{formatDate(item.created_at)}</div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MateriSemua;
