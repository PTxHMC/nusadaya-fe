import { UserService } from '@/service/User';
import { useQuery } from '@tanstack/react-query';

const useGetUsers = ({ enabled }: any) => {
  return useQuery({
    queryKey: ['getUsers'],
    queryFn: async () => {
      const res = await UserService.getUsers();
      return res.data;
    },
    enabled
  });
};

export { useGetUsers };
