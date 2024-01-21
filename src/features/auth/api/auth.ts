import { IUserDto, auth } from '@/shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: IUserDto) => auth.login(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['USER_AUTH'] });
    },
  });
};
