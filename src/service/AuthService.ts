import { fetcher } from '@/lib/axios';
import { LoginType, RegisterType } from '@/types/Auth';

export const AuthService = {
  register: async (body: RegisterType) => {
    const res = await fetcher.post('/users/register', body);
    return res.data;
  },
  login: async (body: LoginType) => {
    const res = await fetcher.post('/users/login', body);
    localStorage.setItem('access_token', res.data.data.access_token);
    return res.data;
  },
  logout: async () => {
    const res = await fetcher.delete('/users/logout');
    return res.data;
  },
  getAccessToken: async () => {
    try {
      const res = await fetcher.get('users/token');
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
