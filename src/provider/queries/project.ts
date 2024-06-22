import { ProjectType } from '@/types/projects';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createProject, getProjectById, getProjects } from '../api/project';

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

export const useGetProjectsQuery = () => {
	return useQuery({
		queryFn: getProjects,
		queryKey: ['projects'],
	});
};

export const useGetProjectByIdQuery = (id: ProjectType['_id']) => {
	return useQuery({
		queryFn: () => getProjectById(id),
		queryKey: ['update-project', id],
	});
};
