import { useMutation } from '@tanstack/react-query';

const useMutateSaveName = () => {
  return useMutation<unknown, unknown, { name: string }>({
    mutationFn: async ({ name }) => {
      localStorage.setItem('name', name);
    },
  });
};

export default useMutateSaveName;
