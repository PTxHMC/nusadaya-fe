import { AuthService } from '@/service/AuthService';
import { LoginType, RegisterType } from '@/types/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const useAuthRegister = () => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ['register'],
    mutationFn: async (body: RegisterType) => {
      await AuthService.register(body);
    },
    onSuccess: () => {
      push('/sign-in');
      toast.success('Berhasil Registrasi');
    },
    onError: () => {
      toast.error('Periksa Kembali Data Anda');
    }
  });
};

const useAuthLogout = () => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      await AuthService.logout();
    },
    onSuccess: () => {
      push('/');
      toast.success('Berhasil Logout');
    },
    onError: () => {
      toast.error('Ada Sesuatu Yang Salah');
    }
  });
};

const useAuthLogin = () => {
  const { push } = useRouter();

  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (body: LoginType) => {
      await AuthService.login(body);
    },
    onSuccess: () => {
      push('/');
      toast.success('Berhasil Login');
    },
    onError: () => {
      toast.error('Email/Password Salah');
    }
  });
};

const useGetAccessToken = () => {
  return useQuery({
    queryKey: ['getAccessToken'],
    queryFn: async () => {
      const res = await AuthService.getAccessToken();
      return res.data;
    }
  });
};

export { useAuthRegister, useAuthLogin, useAuthLogout, useGetAccessToken };
