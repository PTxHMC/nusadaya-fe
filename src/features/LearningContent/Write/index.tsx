'use client';
import { tokenAccess } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';

const WritePage = () => {
  const Editor = useMemo(
    () =>
      dynamic(() => import('../components/Editor'), {
        ssr: false
      }),
    []
  );

  const { push } = useRouter();

  useEffect(() => {
    tokenAccess(push, '/sign-in');
  }, [push]);

  return (
    <div className="h-screen bg-[url('/assets/bg-base.png')] py-8">
      <Editor />
    </div>
  );
};

export default WritePage;
