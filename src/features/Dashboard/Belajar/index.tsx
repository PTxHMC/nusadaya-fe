'use client';
import {
  Button,
  Card,
  CardBody,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import { useState } from 'react';
import NextLink from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Belajar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dummyData = [
    {
      title: 'Time Attack!',
      desc: 'Jawab semua soal sebelum waktu habis.'
    },
    {
      title: 'Time Attack!',
      desc: 'Jawab semua soal sebelum waktu berakhir.'
    },
    {
      title: 'Time Attack!',
      desc: 'Jawab semua soal sebelum waktu tidak ada.'
    },
    {
      title: 'Time Attack!',
      desc: 'Jawab semua soal sebelum waktu akhir.'
    },
    {
      title: 'Time Attack!',
      desc: 'Jawab semua soal sebelum waktu telah usai.'
    }
  ];
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
              <Button href="" variant="bordered" className="border-gray-700">
                Nama
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
      <div className="container mx-auto mt-32 flex flex-col gap-6">
        <div className="mx-6 flex flex-col md:mx-4 lg:mx-6 lg:flex">
          <h1 className="text-5xl font-bold text-[#4F4F4F]">Hello!</h1>
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-bold text-[#4F4F4F]">
              Mau <span className="text-[#9C8D8D]">apa</span> hari ini?
            </h1>
            <Button
              variant="solid"
              className="mx-2 flex flex-row-reverse items-center border-1 border-solid border-[#F0F0F0] bg-white-1 text-[#6B6673] shadow-md"
            >
              <ChevronRight /> Lainnya...
            </Button>
          </div>
        </div>
        <div className="mx-6 grid gap-4 md:grid-cols-4 lg:grid-cols-5">
          {dummyData.map((item, index) => (
            <div key={index}>
              <Card>
                <CardBody>
                  <div className="flex justify-center">
                    <Image
                      src="/assets/time_content.png"
                      alt="Content"
                      width={150}
                      height={150}
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-primary-text">
                    {item.title}
                  </h1>
                  <p>{item.desc}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Belajar;
