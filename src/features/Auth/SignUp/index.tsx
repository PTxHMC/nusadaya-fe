import AuthTab from '../components/AuthTab';

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-white-2 lg:justify-between">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-primary-1 p-16 pr-0 text-white-1 lg:flex">
        <div className="flex size-full flex-col items-center justify-center rounded-lg rounded-r-none bg-primary-2 shadow-lg">
          <div className="w-2/3">
            <p className="text-2xl font-light text-white-1">
              Selamat datang di Nusadaya!
            </p>
            <h1 className="text-5xl font-bold leading-tight">
              Mulai petualangan budaya Anda dengan mendaftar sekarang.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full p-4 lg:w-1/2 lg:p-16 lg:pl-0">
        <div className="flex size-full flex-col items-center justify-center rounded-lg rounded-l-none bg-white-2 px-16 shadow-lg">
          <span className="text-primary-text">Selamat Datang di</span>
          <h1 className="mb-6 text-4xl font-extrabold">Nusadaya</h1>
          <AuthTab />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
