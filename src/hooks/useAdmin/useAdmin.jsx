import { useQuery } from '@tanstack/react-query';
import useAuth from '../useAuth/useAuth';
import useAxiosProtected from '../useAxiosProtected/useAxionProtected';

const useAdmin = () => {
  const { user } = useAuth();
  user;
  const axiosProtected = useAxiosProtected();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await axiosProtected.get(`/user/admin/${user.email}`);
      'is admin response', res;
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
