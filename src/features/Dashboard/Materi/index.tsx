'use client';
import { Button, Card, CardBody } from '@nextui-org/react';
import { Settings } from 'lucide-react';
import React from 'react';
import { useGetContents } from '../hooks';
import Image from 'next/image';

const Materi = () => {
  const { data: contentData, isSuccess } = useGetContents();
  console.log(contentData);
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
        <div className="mx-2 my-2 flex flex-col flex-wrap justify-between gap-2 md:mx-10 md:flex-wrap md:justify-between md:gap-6 lg:mx-12 lg:flex-row lg:gap-2">
          {isSuccess ? (
            contentData.map((item: any) => (
              <div key={item.id}>
                <Card>
                  <CardBody className="m-2 h-max w-60">
                    <Image
                      src="/assets/time-content.png"
                      width={0}
                      alt="Content"
                      height={0}
                      sizes="100vw"
                      className="h-auto w-full rounded-t-md object-cover"
                    />
                    <h1 className="font-bold">{item.title}</h1>
                    <div>
                      {item.categories.map(
                        (category: string, index: number) => (
                          <p key={index}>{category}</p>
                        )
                      )}
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

export default Materi;
