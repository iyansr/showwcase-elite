import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Education } from '@showwcase/modules/shared/types';

const useMutateSaveEducation = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, { education: Education }>({
    mutationFn: async ({ education }) => {
      const educationList = JSON.parse(localStorage.getItem('education') || '[]');
      localStorage.setItem('education', JSON.stringify([...educationList, education]));
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user_education']);
    },
  });
};

export default useMutateSaveEducation;
