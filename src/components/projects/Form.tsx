import { CustomLink } from '@/components/CustomLink'
import { ProjectFormData } from '@/types/projects'
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { ProjectFormFields } from './FormFields'

type ProjectFormProps = {
  title: string
  subTitle: string
  btnTitle: string
  data?: ProjectFormData
  register: UseFormRegister<ProjectFormData>
  handleSubmit: UseFormHandleSubmit<any, undefined>
  errors: FieldErrors<ProjectFormData>
  handleForm: (data: ProjectFormData) => void
}

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
      <h1 className='dark:text-white text-5xl font-black'>{title}</h1>
      <p className='dark:text-secondary-dark text-2xl font-light text-gray-500 mt-5'>{subTitle}</p>

      <nav className='my-5 text-right'>
        <CustomLink title='Go back' to='../' />
      </nav>

      <form className='dark:bg-secondary-background-dark mt-10 bg-white shadow-lg p-10 rounded-lg' onSubmit={handleSubmit(handleForm)} noValidate>
        <ProjectFormFields register={register} errors={errors} />

        <button
          type='submit'
          className='bg-primary-dark dark:hover:bg-tertiary-dark text-white font-bold py-2 px-4 rounded-lg w-full mt-5'
        > 
          {btnTitle}
        </button>
      </form>
    </div>
  )
}
