import { useQuery } from '@tanstack/react-query';

import api from '@showwcase/lib/axios';
import type { University } from '@showwcase/modules/shared/types';

const fetchUniv = async (name?: string) => {
  const response = await api.request<University[]>({
    method: 'get',
    url: 'search',
    params: {
      name,
      limit: '5',
    },
  });

  return response.data;
};

const useQuerySearchUniversity = (name?: string) => {
  return useQuery<unknown, unknown, University[]>({
    queryKey: ['search_university', name],
    queryFn: () => fetchUniv(name),
    enabled: !!name,
  });
};

export default useQuerySearchUniversity;
