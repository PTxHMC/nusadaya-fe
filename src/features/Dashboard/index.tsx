'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthLogout } from '../Auth/hooks';
import { useGetUsers } from './hooks';
import { fetcherAuth } from '@/lib/axios';

const DashboardPage = () => {
  const { push } = useRouter();

  //   const { data: userData } = useGetUsers({ enabled: fetchUsers });

  const { mutate: logout } = useAuthLogout({
    onSuccess: () => {
      console.log('logout');
    },
    onError: (error: any) => {
      console.log(error);
    }
  });

  const handelLogout = () => {
    logout();
    push('/sign-in');
  };

  const handleGetUsers = async () => {
    try {
      const userData = await fetcherAuth.get('/users/profile');

      console.log(userData.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>DashboardPage</div>
      <Button color="danger" onClick={handelLogout}>
        Logout
      </Button>
      <Button color="danger" onClick={handleGetUsers}>
        set token
      </Button>
    </>
  );
};

export default DashboardPage;
