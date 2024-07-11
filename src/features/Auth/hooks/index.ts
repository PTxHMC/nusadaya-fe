import { AuthService } from '@/service/Auth';
import { LoginType, RegisterType } from '@/types/Auth';
import { useMutation } from '@tanstack/react-query';

const useAuthRegister = ({ onSuccess, onError }: any) => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: async (body: RegisterType) => {
      await AuthService.register(body);
    },
    onSuccess,
    onError
  });
};

const useAuthLogout = ({ onSuccess, onError }: any) => {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      await AuthService.logout();
    },
    onSuccess,
    onError
  });
};

const useAuthLogin = ({ onSuccess, onError }: any) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (body: LoginType) => {
      await AuthService.login(body);
    },
    onSuccess,
    onError
  });
};

export { useAuthRegister, useAuthLogin, useAuthLogout };
