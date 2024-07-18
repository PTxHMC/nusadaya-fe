'use client';
import { Button, Link } from '@nextui-org/react';

const HeroSection = () => {
  return (
    <section
      id="Belajar"
      className="flex h-screen flex-col items-center gap-5 bg-[url('/assets/bg-landing.png')] bg-cover bg-center bg-no-repeat py-40"
    >
      <h1 className="text-balance px-2 text-center text-4xl font-semibold leading-tight text-[#4F4F4F] md:px-12 lg:px-24 xl:text-6xl xl:leading-normal">
        Lestarikan <span className="font-bold text-[#9C8D8D]">Budaya Kita</span>{' '}
        dengan <span className="font-bold text-[#9C8D8D]">Belajar</span> di{' '}
        <span className="font-bold text-[#9C8D8D]">Nusadaya</span>
      </h1>
      <Button
        as={Link}
        href="/belajar"
        size="lg"
        className="bg-[#B09F9F] px-8 py-4 font-bold text-white shadow-lg"
      >
        Mulai Belajar
      </Button>
    </section>
  );
};

export default HeroSection;
