import { fetcher } from '@/lib/axios';

export const LearningContentService = {
  getContents: async () => {
    const res = await fetcher.get('/learning-content');
    return res.data;
  }
};
