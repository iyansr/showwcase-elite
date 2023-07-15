import { useQuery } from '@tanstack/react-query';

import type { Education } from '@showwcase/modules/shared/types';

const useQueryGetUserEducation = () => {
  return useQuery<unknown, unknown, Education[]>({
    queryKey: ['user_education'],
    queryFn: () => {
      const educationList: Education[] = JSON.parse(localStorage.getItem('education') || '[]');

      return educationList.sort((a, b) => b.added - a.added);
    },
  });
};

export default useQueryGetUserEducation;
