import { useMutation } from '@tanstack/react-query';

import type { Education } from '@showwcase/modules/shared/types';

const useMutateSaveEducation = () => {
  return useMutation<unknown, unknown, { education: Education }>({
    mutationFn: async ({ education }) => {
      const educationList = JSON.parse(localStorage.getItem('education') || '[]');
      localStorage.setItem('education', JSON.stringify([...educationList, education]));
    },
  });
};

export default useMutateSaveEducation;
