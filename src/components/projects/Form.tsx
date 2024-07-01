import { CustomLink } from '@/components/CustomLink';
import { ProjectFormData } from '@/types/projects';
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { ProjectFormFields } from './FormFields';

type ProjectFormProps = {
  title: string;
  subTitle: string;
  btnTitle: string;
  data?: ProjectFormData;
  register: UseFormRegister<ProjectFormData>;
  handleSubmit: UseFormHandleSubmit<any, undefined>;
  errors: FieldErrors<ProjectFormData>;
  handleForm: (data: ProjectFormData) => void;
};

export const ProjectForm = ({
  title,
  subTitle,
  btnTitle,
  register,
  handleSubmit,
  errors,
  handleForm,
}: ProjectFormProps) => {
  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-5xl font-black'>{title}</h1>
      <p className='text-2xl font-light text-gray-500 mt-5'>{subTitle}</p>

      <nav className='my-5'>
        <CustomLink title='Go back' to='../' />
      </nav>

      <form className='mt-10 bg-white shadow-lg p-10 rounded-lg' onSubmit={handleSubmit(handleForm)} noValidate>
        <ProjectFormFields register={register} errors={errors} />

        <input
          type='submit'
          value={btnTitle}
          className='bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors'
        />
      </form>
    </div>
  );
};
