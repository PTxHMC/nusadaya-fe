'use client';

import {
  Button,
  Input,
  Select,
  SelectItem,
  Tab,
  Tabs
} from '@nextui-org/react';
import { LockKeyhole, Mail, SquareUserRound, UsersRound } from 'lucide-react';
import { usePathname } from 'next/navigation';

const AuthTab = () => {
  const pathname = usePathname();
  const roles = [
    { key: 'USER', label: 'Pengguna' },
    { key: 'TEACHER', label: 'Guru' }
  ];

  return (
    <Tabs
      fullWidth
      aria-label="Options"
      selectedKey={pathname}
      className="max-w-sm"
    >
      <Tab key="/sign-in" title="Masuk" href="/sign-in">
        <div className="mt-4 flex flex-col items-center justify-center gap-6">
          <Input
            type="email"
            label="Alamat Email"
            labelPlacement="outside"
            size="lg"
            isRequired
            startContent={
              <Mail className="pointer-events-none flex-shrink-0" />
            }
            className="lg:w-[24rem]"
          />
          <Input
            type="password"
            label="Kata Sandi"
            labelPlacement="outside"
            size="lg"
            isRequired
            startContent={
              <LockKeyhole className="pointer-events-none flex-shrink-0" />
            }
            className="lg:w-[24rem]"
          />
        </div>
        <div className="max-w-sm">
          <Button
            size="lg"
            fullWidth
            className="mt-10 bg-primary-1 font-medium text-white-1"
          >
            Masuk Sekarang
          </Button>
          <p className="mt-6 text-center text-xs text-primary-2 md:text-base">
            Masuk sekarang untuk mulai menjelajahi budaya Indonesia!
          </p>
        </div>
      </Tab>
      <Tab key="/sign-up" title="Daftar" href="/sign-up">
        <div className="mt-4 flex flex-col items-center justify-center gap-6">
          <Input
            type="text"
            label="Nama Pengguna"
            labelPlacement="outside"
            size="lg"
            isRequired
            startContent={
              <SquareUserRound className="pointer-events-none flex-shrink-0" />
            }
            className="lg:w-[24rem]"
          />
          <Input
            type="email"
            label="Alamat Email"
            labelPlacement="outside"
            size="lg"
            isRequired
            startContent={
              <Mail className="pointer-events-none flex-shrink-0" />
            }
            className="lg:w-[24rem]"
          />
          <Input
            type="password"
            label="Kata Sandi"
            labelPlacement="outside"
            size="lg"
            isRequired
            startContent={
              <LockKeyhole className="pointer-events-none flex-shrink-0" />
            }
            className="lg:w-[24rem]"
          />
          <Select
            label="Masuk Sebagai"
            labelPlacement="outside"
            size="lg"
            isRequired
            startContent={
              <UsersRound className="pointer-events-none flex-shrink-0" />
            }
            className="lg:w-[24rem]"
          >
            {roles.map(role => (
              <SelectItem key={role.key}>{role.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div className="max-w-sm">
          <Button
            size="lg"
            fullWidth
            className="mt-10 bg-primary-1 font-medium text-white-1"
          >
            Daftar Sekarang
          </Button>
          <p className="mt-6 text-center text-xs text-primary-2 md:text-base">
            Daftarkan diri anda sekarang untuk mulai menjelajahi budaya
            Indonesia!
          </p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default AuthTab;
