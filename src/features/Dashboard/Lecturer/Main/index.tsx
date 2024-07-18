'use client';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import React, { useState } from 'react';
import NextLink from 'next/link';
import { DashboardItems } from '@/datas/dashboard';
import { Icon } from 'lucide-react';

const MainDash = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[url('/assets/bg-dash.png')] bg-cover bg-center bg-no-repeat">
      <div>
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          maxWidth="2xl"
          className="bg-transparent backdrop-blur-none"
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden"
            />
            <NavbarBrand>
              <Link
                as={NextLink}
                color="foreground"
                href="/"
                className="w-full text-2xl font-bold"
              >
                Nusadaya
              </Link>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button
                href="/sign-up"
                variant="bordered"
                className="border-gray-700"
              >
                Nama
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
      <div className="container mx-auto mt-52 flex flex-col gap-6">
        <div className="mx-4 flex flex-col">
          <h1 className="text-5xl font-bold text-[#4F4F4F]">Selamat Pagi!</h1>
          <h1 className="text-5xl font-bold text-[#4F4F4F]">
            Apa yang ingin anda <span className="text-[#9C8D8D]">lakukan</span>{' '}
            pagi ini?
          </h1>
        </div>
        <div className="mx-4 flex gap-2">
          {DashboardItems.map(item => (
            <div key={item.id} className="">
              <Button
                className={`${item.id === 1 ? 'bg-primary-text text-white' : 'bg-primary-1 text-white'}`}
              >
                <item.icon />
                {item.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainDash;
