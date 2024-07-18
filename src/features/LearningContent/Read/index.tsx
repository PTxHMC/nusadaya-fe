import dynamic from 'next/dynamic';

const ReadPage = () => {
  const EditorRead = dynamic(() => import('../components/EditorRead'), {
    ssr: false
  });

  return (
    <div className="flex h-screen justify-center bg-[url('/assets/bg-base.png')] py-8">
      <EditorRead />
    </div>
  );
};

export default ReadPage;
