import api from '@/lib/axios';
import { ProjectFormData } from '@/types/projects';

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
    console.log(error);
  }
};
