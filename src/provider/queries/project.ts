import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createProject } from '../api/project';

export const useCreateProjectMutation = () => {
  return useMutation({
    mutationFn: createProject,
    onSuccess: (data: any) => {
      toast.success(data?.message);
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });
};
