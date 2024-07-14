'use client';
import { NavbarData } from '@/constants/landing';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import React, { FC, useState } from 'react';
import NextLink from 'next/link';

const LandingPage: FC = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url(/assets/bg-landing.png)'
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div
        style={backgroundImageStyle}
        className="min-h-screen w-full bg-cover bg-no-repeat backdrop-opacity-0"
      >
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className="backdrop-filter-none"
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
                className="w-full text-2xl font-bold text-[#4F4F4F]"
              >
                Nusadaya
              </Link>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden gap-4 md:flex" justify="center">
            {NavbarData.map(({ id, title }) => (
              <NavbarItem key={id}>
                <Link color="foreground" href={`#${title}`}>
                  {title}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button variant="bordered" className="border-gray-700">
                Daftar
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {NavbarData.map(({ id, title }) => (
              <NavbarMenuItem key={id}>
                <Link
                  as={NextLink}
                  color="foreground"
                  className="w-full"
                  href={`#${title}`}
                  size="lg"
                  onPress={() => setIsMenuOpen(false)}
                >
                  {title}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        <main className="mx-12 my-36 flex flex-col items-center justify-center gap-5 md:my-44 md:justify-center lg:my-48">
          <h1 className="px-12 text-center text-5xl leading-tight text-[#4F4F4F] md:px-16 lg:px-72">
            Lestarikan{' '}
            <span className="font-bold text-[#9C8D8D]">Budaya Kita</span> dengan{' '}
            <span className="font-bold text-[#9C8D8D]">Belajar</span> di{' '}
            <span className="font-bold text-[#9C8D8D]">Nusadaya</span>
          </h1>
          <Button className="bg-[#B09F9F] px-8 py-4 font-bold text-white shadow-lg">
            Mulai Belajar
          </Button>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
