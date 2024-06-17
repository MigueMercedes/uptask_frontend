import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createProject, getProjects } from '../api/project';

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

export const useGetProjectQuery = () => {
  return useQuery({
    queryFn: getProjects,
    queryKey: ['Projects'],
  });
};
