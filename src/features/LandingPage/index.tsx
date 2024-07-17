'use client';
import { Button } from '@nextui-org/react';
import NavigationBar from '@/components/navigation-bar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/bg-landing.png')] bg-cover bg-center bg-no-repeat">
      <NavigationBar />
      <main className="mx-12 my-16 flex flex-col items-center justify-center gap-5 sm:my-28 md:justify-center">
        <h1 className="text-balance px-2 text-center text-4xl font-semibold leading-tight text-[#4F4F4F] md:px-12 lg:px-24 xl:text-6xl xl:leading-normal">
          Lestarikan{' '}
          <span className="font-bold text-[#9C8D8D]">Budaya Kita</span> dengan{' '}
          <span className="font-bold text-[#9C8D8D]">Belajar</span> di{' '}
          <span className="font-bold text-[#9C8D8D]">Nusadaya</span>
        </h1>
        <Button
          size="lg"
          className="bg-[#B09F9F] px-8 py-4 font-bold text-white shadow-lg"
        >
          Mulai Belajar
        </Button>
      </main>
    </div>
  );
};

export default LandingPage;
