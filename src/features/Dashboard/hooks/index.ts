import { LearningContentService } from '@/service/LearningContent';
import { useQuery } from '@tanstack/react-query';

const useGetContents = () => {
  return useQuery({
    queryKey: ['getContents'],
    queryFn: async () => {
      const res = await LearningContentService.getContents();
      return res.data;
    }
  });
};

export { useGetContents };
