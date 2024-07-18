import { CategoryService } from '@/service/Category';
import { LearningContentService } from '@/service/LearningContent';
import { LearningContentType } from '@/types/LearningContent';
import { useMutation, useQuery } from '@tanstack/react-query';

const useCreateContent = ({ onSuccess, onError }: any) => {
  return useMutation({
    mutationKey: ['create.content'],
    mutationFn: async (body: LearningContentType) => {
      await LearningContentService.createContent(body);
    },
    onSuccess,
    onError
  });
};

const useUpdateContent = ({ onSuccess, onError }: any, id: number) => {
  return useMutation({
    mutationKey: ['update.content'],
    mutationFn: async (body: LearningContentType) => {
      await LearningContentService.updateContent(body, id);
    },
    onSuccess,
    onError
  });
};

const useGetContentById = (id: number) => {
  return useQuery({
    queryKey: ['get.content'],
    queryFn: async () => {
      const res = await LearningContentService.getContentById(id);
      return res.data;
    }
  });
};

const useGetCategories = () => {
  return useQuery({
    queryKey: ['get.categories'],
    queryFn: async () => {
      const res = await CategoryService.getCategories();
      return res.data;
    }
  });
};

export {
  useCreateContent,
  useUpdateContent,
  useGetContentById,
  useGetCategories
};
