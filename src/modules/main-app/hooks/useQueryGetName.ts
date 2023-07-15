import { useQuery } from '@tanstack/react-query';

const useQueryGetName = () => {
  return useQuery<unknown, unknown, string | null>({
    queryKey: ['get_user_name'],
    queryFn: () => {
      const name = localStorage.getItem('name');
      return name || null;
    },
  });
};

export default useQueryGetName;
