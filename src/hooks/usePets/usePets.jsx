import { useQuery } from '@tanstack/react-query';
import UseAxiosOpen from '../UseAxiosOpen/UseAxiosOpen';

const usePets = () => {
  const axiosOpen = UseAxiosOpen()
  const {refetch, data: pets = [],} = useQuery({
    queryKey: ['pets'],
    queryFn: async () => {
      const res = await axiosOpen.get('/pets');
      return res.data
    }
  })
  return [pets,refetch];
};

export default usePets;