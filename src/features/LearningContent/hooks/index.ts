import { CategoryService } from '@/service/Category';
import { LearningContentService } from '@/service/LearningContent';
import { LearningContentType } from '@/types/LearningContent';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const useCreateContent = () => {
  return useMutation({
    mutationKey: ['create.content'],
    mutationFn: async (body: LearningContentType) => {
      await LearningContentService.createContent(body);
    },
    onSuccess: () => {
      toast.success('Berhasil Membuat Materi');
    },
    onError: () => {
      toast.error('Ada Sesuatu Yang Salah');
    }
  });
};

const useUpdateContent = (id: number) => {
  return useMutation({
    mutationKey: ['update.content'],
    mutationFn: async (body: LearningContentType) => {
      await LearningContentService.updateContent(body, id);
    },
    onSuccess: () => {
      toast.success('Berhasil Memperbarui Materi');
    },
    onError: () => {
      toast.error('Ada Sesuatu Yang Salah');
    }
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

const useDeleteContent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete.content'],
    mutationFn: async (id: number) => {
      await LearningContentService.deleteContent(id);
    },
    onSuccess: () => {
      toast.success('Berhasil Menghapus Materi');
      queryClient.invalidateQueries({ queryKey: ['getContents'] });
      queryClient.invalidateQueries({ queryKey: ['getMyContents'] });
    },
    onError: () => {
      toast.error('Ada Sesuatu Yang Salah');
    }
  });
};

export {
  useCreateContent,
  useUpdateContent,
  useDeleteContent,
  useGetContentById,
  useGetCategories
};
