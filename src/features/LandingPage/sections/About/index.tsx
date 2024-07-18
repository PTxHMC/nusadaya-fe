import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      id="Tentang Kami"
      className="mt-24 flex flex-col-reverse gap-x-24 gap-y-10 px-12 py-8 text-center md:text-start lg:flex-row lg:justify-between"
    >
      <div className="lg:flex-shrink-0 lg:flex-grow">
        <Image
          src="/assets/about-section.svg"
          width={400}
          height={0}
          className="mx-auto h-auto"
          alt="About Section"
        />
      </div>
      <div className="mx-auto max-w-3xl space-y-4 text-primary-text lg:flex-auto">
        <h2 className="text-2xl font-semibold">Tentang Kami</h2>
        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          Didirikan Pada Tahun <strong>2024</strong>
        </h1>
        <p className="text-balance text-secondary-text">
          Temukan berbagai materi tentang seni, musik, tarian, bahasa, adat
          istiadat, dan sejarah yang disajikan dalam bentuk modul yang menarik.
          Nikmati juga game edukatif yang seru, menjadikan proses belajar
          semakin menyenangkan dan interaktif!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
