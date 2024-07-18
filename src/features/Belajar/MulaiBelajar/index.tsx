'use client';

import { Button, Link } from '@nextui-org/react';
import { SquarePen } from 'lucide-react';

const MulaiBelajar = () => {
  return (
    <div className="container mx-auto my-48 flex flex-col gap-6">
      <div className="mx-4 flex flex-col">
        <h1 className="text-5xl font-bold text-[#4F4F4F]">Selamat Datang!</h1>
        <h1 className="text-5xl font-bold text-[#4F4F4F]">
          Apa yang ingin anda <span className="text-[#9C8D8D]">lakukan</span>{' '}
          hari ini?
        </h1>
      </div>
      <div className="mx-4 flex gap-2">
        <Button
          as={Link}
          href="/dashboard/write"
          className={'bg-primary-1 text-white'}
          startContent={<SquarePen />}
        >
          Tulis Materi
        </Button>
      </div>
    </div>
  );
};

export default MulaiBelajar;
