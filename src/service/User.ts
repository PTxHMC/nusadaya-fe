import { fetcherAuth } from '@/lib/axios';

export const UserService = {
  getUsers: async () => {
    const res = await fetcherAuth.get('/users');
    return res.data;
  }
};
