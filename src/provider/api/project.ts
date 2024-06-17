import api from '@/lib/axios';
import { ProjectFormData, dashboardProjectSchema } from '@/types/projects';
import { errorCatcher } from '@/utils/error-catcher.util';

export interface IStandardMessageResponse {
  data: {
    message: string;
  };
}

export const createProject = async (formData: ProjectFormData) => {
  try {
    const { data }: IStandardMessageResponse = await api.post(
      '/projects',
      formData
    );

    return data;
  } catch (error) {
    errorCatcher(error);
  }
};

export const getProjects = async () => {
  try {
    const { data } = await api.get('/projects');

    const response = dashboardProjectSchema.safeParse(data);

    if (response.success) {
      return response.data
    }
  } catch (error) {
    errorCatcher(error);
  }
};
