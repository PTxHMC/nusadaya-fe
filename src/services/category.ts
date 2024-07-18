import { fetcher } from '@/lib/axios';

export const CategoryService = {
  getCategories: async () => {
    const res = await fetcher.get('/category');
    return res.data;
  }
};
