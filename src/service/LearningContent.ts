import { fetcherAuth, fetcher } from '@/lib/axios';
import { LearningContentType } from '@/types/LearningContent';

export const LearningContentService = {
  getContents: async () => {
    const res = await fetcher.get('/learning-content');
    return res.data;
  },
  getContentById: async (id: number) => {
    const res = await fetcher.get(`/learning-content/${id}`);
    return res.data;
  },
  getMyContents: async () => {
    const res = await fetcherAuth.get('/learning-content/my');
    return res.data;
  },
  createContent: async (body: LearningContentType) => {
    const res = await fetcherAuth.post('/learning-content', body, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data;
  },
  updateContent: async (body: LearningContentType, id: number) => {
    const res = await fetcherAuth.patch(`/learning-content/${id}`, body, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data;
  },
  deleteContent: async (id: number) => {
    const res = await fetcherAuth.delete(`/learning-content/${id}`);
    return res.data;
  }
};
