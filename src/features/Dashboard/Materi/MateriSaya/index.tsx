'use client';
import { Avatar, Button, Card, CardBody } from '@nextui-org/react';
import { Settings } from 'lucide-react';
import React from 'react';
import { useGetMyContents } from '../../hooks';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const MateriSaya = () => {
  const { data: contentData, isSuccess } = useGetMyContents();
  console.log(contentData);

  const { push } = useRouter();

  const toRead = (id: number) => {
    push(`/dashboard/read?id=${id}`);
  };

  return (
    <div className="container mx-auto">
      <div className="mx-6 flex flex-col gap-8 border-t-1">
        <div className="mt-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary-text">Materi Anda</h1>
          <Button
            variant="solid"
            className="border-solid border-[#F0F0F0] bg-white-1 font-bold text-[#6B6673] shadow-md"
          >
            <Settings />
            Kelola Materi Anda
          </Button>
        </div>
        <div className="my-2 grid grid-cols-5 gap-4">
          {isSuccess ? (
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
                          src={
                            item.thumbnail
                              ? item.thumbnail
                              : '/assets/image-placeholder.png'
                          }
                          layout="fill"
                          objectFit="cover"
                          alt="Content"
                          className="absolute inset-0 h-full w-full rounded-lg"
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
            ))
          ) : (
            <div>data kosong</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MateriSaya;
