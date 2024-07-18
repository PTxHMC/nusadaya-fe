import { LearningContentService } from '@/services/learning-content';
import { useQuery } from '@tanstack/react-query';

const useGetMyContents = () => {
  return useQuery({
    queryKey: ['getMyContents'],
    queryFn: async () => {
      const res = await LearningContentService.getMyContents();
      return res.data;
    }
  });
};

const useGetContents = () => {
  return useQuery({
    queryKey: ['getContents'],
    queryFn: async () => {
      const res = await LearningContentService.getContents();
      return res.data;
    }
  });
};

export { useGetMyContents, useGetContents };
