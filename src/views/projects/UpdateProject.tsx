import { ProjectForm } from '@/components/projects/Form';
import { useGetProjectByIdQuery } from '@/provider/queries/project';
import { ProjectFormData } from '@/types/projects';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';

export const UpdateProjectView = () => {
  const { projectId } = useParams();

  const { data, isLoading, isError } = useGetProjectByIdQuery(projectId!);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormData>();

  const handleForm = (formData: ProjectFormData) => {
    console.log(formData);
  };

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  if (isLoading) return <> Loading... </>;
  if (isError) return <Navigate to='/404' />;

  return (
    <>
      <ProjectForm
        title='Update Projects'
        subTitle='Complete the form to update a project'
        btnTitle='Update Project'
        handleForm={handleForm}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
    </>
  );
};
