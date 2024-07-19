import api from '@/lib/axios'
import { DashboardProjectSchema, ProjectFormData, ProjectSchema, Project } from '@/types/projects'
import { IStandardMessageResponse } from '@/types/standard.interfaces'
import { errorCatcher } from '@/utils/error-catcher.util'

export const createProject = async (formData: ProjectFormData) => {
  try {
    const { data }: IStandardMessageResponse = await api.post('/projects', formData)

    return data
  } catch (error) {
    throw errorCatcher(error)
  }
}

export const getProjects = async () => {
  try {
    const { data } = await api.get('/projects')

    const response = DashboardProjectSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    throw errorCatcher(error)
  }
}

export const getOneProject = async (id: Project['_id']) => {
  try {
    const { data } = await api.get(`/projects/${id}`)

    const response = ProjectSchema.safeParse(data)

    if (response.success) {
      return response.data
    }
  } catch (error) {
    throw errorCatcher(error)
  }
}

export const updateProject = async ({ id, project }: { id: Project['_id']; project: ProjectFormData }) => {
  try {
    const { data }: IStandardMessageResponse = await api.patch(`/projects/${id}`, project)

    return data
  } catch (error) {
    throw errorCatcher(error)
  }
}

export const deleteProject = async (id: Project['_id']) => {
  try {
    const { data }: IStandardMessageResponse = await api.delete(`/projects/${id}`)

    return data
  } catch (error) {
    throw errorCatcher(error)
  }
}
