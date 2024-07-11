'use client';

import {
  Button,
  Input,
  Select,
  SelectItem,
  Tab,
  Tabs
} from '@nextui-org/react';
import { useFormik } from 'formik';
import { LockKeyhole, Mail, SquareUserRound, UsersRound } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthLogin, useAuthRegister } from '../hooks';

const AuthTab = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const roles = [
    { key: 'USER', label: 'Pengguna' },
    { key: 'TEACHER', label: 'Guru' }
  ];

  const { mutate: register, isPending } = useAuthRegister({
    onSuccess: () => {
      console.log('success');
    },
    onError: (error: any) => {
      console.log(error);
    }
  });

  const { mutate: login } = useAuthLogin({
    onSuccess: (data: any) => {
      console.log(data);
      push('/dashboard');
    },
    onError: (error: any) => {
      console.log(error);
    }
  });

  const formRegister = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      role: ''
    },
    onSubmit: values => {
      register(values);
    }
  });

  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      login(values);
    }
  });

  const handleFormInput = (event: any) => {
    formRegister.setFieldValue(event.target.name, event.target.value);
    formLogin.setFieldValue(event.target.name, event.target.value);
  };

  return (
    <Tabs
      fullWidth
      aria-label="Options"
      selectedKey={pathname}
      className="max-w-sm"
    >
      <Tab key="/sign-in" title="Masuk" href="/sign-in">
        <form onSubmit={formLogin.handleSubmit}>
          <div className="mt-4 flex flex-col items-center justify-center gap-6">
            <Input
              type="email"
              name="email"
              label="Alamat Email"
              labelPlacement="outside"
              size="lg"
              isRequired
              startContent={
                <Mail className="pointer-events-none flex-shrink-0" />
              }
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
            <Input
              type="password"
              name="password"
              label="Kata Sandi"
              labelPlacement="outside"
              size="lg"
              isRequired
              startContent={
                <LockKeyhole className="pointer-events-none flex-shrink-0" />
              }
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
          </div>
          <div className="max-w-sm">
            <Button
              size="lg"
              type="submit"
              fullWidth
              className="mt-10 bg-primary-1 font-medium text-white-1"
            >
              Masuk Sekarang
            </Button>
            <p className="mt-6 text-center text-xs text-primary-2 md:text-base">
              Masuk sekarang untuk mulai menjelajahi budaya Indonesia!
            </p>
          </div>
        </form>
      </Tab>
      <Tab key="/sign-up" title="Daftar" href="/sign-up">
        <form onSubmit={formRegister.handleSubmit}>
          <div className="mt-4 flex flex-col items-center justify-center gap-6">
            <Input
              type="text"
              name="username"
              label="Nama Pengguna"
              labelPlacement="outside"
              size="lg"
              isRequired
              startContent={
                <SquareUserRound className="pointer-events-none flex-shrink-0" />
              }
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
            <Input
              type="email"
              name="email"
              label="Alamat Email"
              labelPlacement="outside"
              size="lg"
              isRequired
              startContent={
                <Mail className="pointer-events-none flex-shrink-0" />
              }
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
            <Input
              type="password"
              name="password"
              label="Kata Sandi"
              labelPlacement="outside"
              size="lg"
              isRequired
              startContent={
                <LockKeyhole className="pointer-events-none flex-shrink-0" />
              }
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
            <Input
              type="password"
              name="confirm_password"
              label="Konfirmasi Kata Sandi"
              labelPlacement="outside"
              size="lg"
              isRequired
              startContent={
                <LockKeyhole className="pointer-events-none flex-shrink-0" />
              }
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
            <Select
              label="Daftar Sebagai"
              name="role"
              labelPlacement="outside"
              size="lg"
              isRequired
              startContent={
                <UsersRound className="pointer-events-none flex-shrink-0" />
              }
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            >
              {roles.map(role => (
                <SelectItem key={role.key} value={role.key}>
                  {role.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="max-w-sm">
            {isPending ? (
              <Button
                size="lg"
                fullWidth
                isLoading
                className="mt-10 bg-primary-1 font-medium text-white-1"
              >
                Daftar Sekarang
              </Button>
            ) : (
              <Button
                type="submit"
                size="lg"
                fullWidth
                className="mt-10 bg-primary-1 font-medium text-white-1"
              >
                Daftar Sekarang
              </Button>
            )}

            <p className="mt-6 text-center text-xs text-primary-2 md:text-base">
              Daftarkan diri anda sekarang untuk mulai menjelajahi budaya
              Indonesia!
            </p>
          </div>
        </form>
      </Tab>
    </Tabs>
  );
};

export default AuthTab;
