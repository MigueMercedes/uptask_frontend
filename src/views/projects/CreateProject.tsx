import { CustomLink } from '@/components/CustomLink';
import { useCreateProjectMutation } from '@/provider/queries/project';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProjectFormData } from '@/types/projects';
import { ProjectForm } from '@/components/projects/Form';

const initialValue: ProjectFormData = {
  projectName: '',
  clientName: '',
  description: '',
};

export const CreateProjectView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });
  const navigate = useNavigate();

  const { mutate } = useCreateProjectMutation();

  const handleForm = (formData: ProjectFormData) => {
    mutate(formData);
    navigate('/');
  };

  return (
    <ProjectForm
      title='Create Projects'
      subTitle='Complete the form to create a project'
      btnTitle='Create Project'
      handleForm={handleForm}
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
    />
  );
};
