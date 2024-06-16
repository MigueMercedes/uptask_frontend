import api from '@/lib/axios';
import { ProjectFormData } from '@/types/projects';
import { isAxiosError } from 'axios';

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
    console.error(error);
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw error;
    }
  }
};
