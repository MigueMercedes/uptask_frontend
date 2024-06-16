import { CustomLink } from '@/components/CustomLink';
import { ProjectForm } from '@/components/projects/ProjectForm';
import { createProjectMutation } from '@/provider/mutations/project';
import { useForm } from 'react-hook-form';
import { ProjectFormData } from 'types/projects';

export const CreateProjectView = () => {
  const initialValue: ProjectFormData = {
    projectName: '',
    clientName: '',
    description: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValue });

  const handleForm = async (formData: ProjectFormData) => {
    createProjectMutation.mutateAsync(formData);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Create Projects</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          Complete the form to create a project
        </p>

        <nav className="my-5">
          <CustomLink
            title="Go back to Projects"
            to="/projects/create"
          />
        </nav>

        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProjectForm
            register={register}
            errors={errors}
          />

          <input
            type="submit"
            value="Create Project"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
};
