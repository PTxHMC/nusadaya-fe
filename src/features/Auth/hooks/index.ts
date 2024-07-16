import { AuthService } from '@/service/auth';
import { LoginType, RegisterType } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
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

export { useAuthRegister, useAuthLogin, useAuthLogout };
