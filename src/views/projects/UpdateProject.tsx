import { ProjectForm } from '@/components/projects/Form';
import { useGetProjectByIdQuery } from '@/provider/queries/project';
import { ProjectFormData } from '@/types/projects';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';

export const UpdateProjectView = () => {
  const { projectId } = useParams();
  const { data, isLoading, error, isError } = useGetProjectByIdQuery(projectId!);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!data || isError) {
      setShouldRedirect(true);
    }
  }, [data, isError]);

  if (shouldRedirect) {
    return <Navigate to='/404' />;
  }

  if (isLoading) {
    return 'Loading...';
  }

  const { clientName, projectName, description } = data;

  const initialValues: ProjectFormData = {
    clientName,
    projectName,
    description,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleForm = () => {};
  console.log(data);
  return (
    <ProjectForm
      title='Update Projects'
      subTitle='Update your project'
      btnTitle='Update Project'
      data={initialValues}
      errors={errors}
      handleForm={handleForm}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
};
