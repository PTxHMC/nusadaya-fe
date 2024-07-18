'use client';
import { Avatar, Button, Card, CardBody } from '@nextui-org/react';
import { CircleEllipsis, Delete, Pencil, Settings } from 'lucide-react';
import React from 'react';
import { useGetMyContents } from '../../hooks';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown';
import { useDeleteContent } from '@/features/LearningContent/hooks';
import placeholderThumbnail from '@/assets/image-placeholder.png';

const MateriSaya = () => {
  const { data: contentData, isSuccess } = useGetMyContents();

  const { mutate: deleteContent } = useDeleteContent();

  const { push } = useRouter();

  const toRead = (id: number) => {
    push(`/belajar/read?id=${id}`);
  };

  const toEdit = (id: number) => {
    push(`/belajar/edit?id=${id}`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mx-6 flex flex-col gap-8 border-t-1">
        <h1 className="mt-4 text-2xl font-bold text-primary-text">
          Materi Anda
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
                      <div className="relative size-full overflow-hidden">
                        <Image
                          src={item.thumbnail || placeholderThumbnail}
                          layout="fill"
                          alt="Content"
                          blurDataURL={placeholderThumbnail.blurDataURL}
                          placeholder="blur"
                          className="absolute inset-0 size-full rounded-lg object-cover"
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
                      <div className="ml-auto self-end">
                        <Dropdown>
                          <DropdownTrigger>
                            <Button size="sm" isIconOnly variant="light">
                              <CircleEllipsis className="w-6" />
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu>
                            <DropdownItem
                              key="edit"
                              startContent={<Pencil className="w-4" />}
                              onClick={() => toEdit(item.id)}
                            >
                              Edit
                            </DropdownItem>

                            <DropdownItem
                              key="delete"
                              className="text-danger"
                              color="danger"
                              startContent={
                                <Delete className="w-4 text-danger group-hover:text-white" />
                              }
                              onClick={() => deleteContent(item.id)}
                            >
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
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

export default MateriSaya;
