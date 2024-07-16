'use client';

import { useState } from 'react';
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
import { usePathname } from 'next/navigation';
import { RegisterSchema } from '@/validations/auth';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import { EyeFilledIcon } from './EyeFilledIcon';
import { useAuthLogin, useAuthRegister } from '../hooks';

const AuthTab = () => {
  const pathname = usePathname();

  const { mutate: register, isPending } = useAuthRegister();
  const { mutate: login } = useAuthLogin();

  const roles = [
    { key: 'USER', label: 'Pengguna' },
    { key: 'TEACHER', label: 'Guru' }
  ];

  const formRegister = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      role: ''
    },
    validationSchema: RegisterSchema,
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

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

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
              name="password"
              label="Kata Sandi"
              labelPlacement="outside"
              size="lg"
              isRequired
              startContent={
                <LockKeyhole className="pointer-events-none flex-shrink-0" />
              }
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
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
            <p className="mt-6 text-center text-xs text-primary-2 md:text-sm">
              Masuk sekarang untuk mulai menjelajahi budaya Indonesia!
            </p>
          </div>
        </form>
      </Tab>
      <Tab key="/sign-up" title="Daftar" href="/sign-up">
        <form onSubmit={formRegister.handleSubmit}>
          <div className="mt-4 flex flex-col items-center justify-center gap-4">
            <Input
              type="text"
              size="lg"
              name="username"
              label="Nama Pengguna"
              labelPlacement="outside"
              errorMessage={formRegister.errors.username}
              isInvalid={
                !!(
                  formRegister.touched.username && formRegister.errors.username
                )
              }
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
              errorMessage={formRegister.errors.email}
              isInvalid={
                !!(formRegister.touched.email && formRegister.errors.email)
              }
              startContent={
                <Mail className="pointer-events-none flex-shrink-0" />
              }
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
            <Input
              name="password"
              label="Kata Sandi"
              labelPlacement="outside"
              size="lg"
              isRequired
              errorMessage={formRegister.errors.password}
              isInvalid={
                !!(
                  formRegister.touched.password && formRegister.errors.password
                )
              }
              startContent={
                <LockKeyhole className="pointer-events-none flex-shrink-0" />
              }
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
            <Input
              name="confirm_password"
              label="Konfirmasi Kata Sandi"
              labelPlacement="outside"
              size="lg"
              isRequired
              errorMessage={formRegister.errors.confirm_password}
              isInvalid={
                !!(
                  formRegister.touched.confirm_password &&
                  formRegister.errors.confirm_password
                )
              }
              startContent={
                <LockKeyhole className="pointer-events-none flex-shrink-0" />
              }
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className="lg:w-[24rem]"
              onChange={handleFormInput}
            />
            <Select
              label="Daftar Sebagai"
              name="role"
              labelPlacement="outside"
              size="lg"
              isRequired
              errorMessage={formRegister.errors.role}
              isInvalid={
                !!(formRegister.touched.role && formRegister.errors.role)
              }
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
                className="mt-6 bg-primary-1 font-medium text-white-1"
              >
                Daftar Sekarang
              </Button>
            ) : (
              <Button
                type="submit"
                size="lg"
                fullWidth
                className="mt-6 bg-primary-1 font-medium text-white-1"
              >
                Daftar Sekarang
              </Button>
            )}

            <p className="mt-2 text-center text-xs text-primary-2 md:text-sm">
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
