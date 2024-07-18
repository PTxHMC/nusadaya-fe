'use client';

import { useGetAccessToken } from '@/features/Auth/hooks';
import { Button, Link } from '@nextui-org/react';
import { SquarePen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { jwtUserDecode } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { tokenAccess } from '@/lib/utils';

const MulaiBelajar = () => {
  const { data: token, isSuccess } = useGetAccessToken();
  const [userData, setUserData] = useState<jwtUserDecode>();
  useEffect(() => {
    if (isSuccess) {
      const decoded: jwtUserDecode = jwtDecode(token.access_token);
      setUserData(decoded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const { push } = useRouter();

  useEffect(() => {
    tokenAccess(push, '/sign-in');
  }, [push]);

  return (
    <div className="container mx-auto flex flex-col gap-6 pb-8 pt-24">
      <div className="mx-4 flex flex-col">
        <h1 className="text-5xl font-bold text-[#4F4F4F]">
          Selamat Datang, {userData?.username}!
        </h1>
        <h1 className="text-5xl font-bold text-[#4F4F4F]">
          Apa yang ingin anda <span className="text-[#9C8D8D]">lakukan</span>{' '}
          hari ini?
        </h1>
      </div>
      <div className="mx-4 flex gap-2">
        <Button
          as={Link}
          href="/belajar/write"
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
