import { Project } from '@/types/projects'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { createProject, getOneProject, getProjects, updateProject } from '../api/project'

export const useCreateProjectMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createProject,
    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })

      toast.success(message)
    },
    onError: ({ message }) => {
      toast.error(message)
    }
  })
}

export const useGetProjectsQuery = () => {
  return useQuery({
    queryFn: getProjects,
    queryKey: ['projects']
  })
}

export const useGetOneProjectQuery = (id: Project['_id']) => {
  return useQuery({
    queryFn: () => getOneProject(id),
    queryKey: ['update-project', id]
  })
}

export const useUpdateProjectMutation = (id: Project['_id']) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateProject,
    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      queryClient.invalidateQueries({ queryKey: ['update-project', id] })
      toast.success(message)
    },
    onError: ({ message }) => {
      toast.error(message)
    }
  })
}
