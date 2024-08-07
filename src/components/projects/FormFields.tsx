import { ErrorMessage } from '@/components/ErrorMessage'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ProjectFormData } from 'types/projects'

type ProjectFormProps = {
  register: UseFormRegister<ProjectFormData>
  errors: FieldErrors<ProjectFormData>
}

export const ProjectFormFields = ({ register, errors }: ProjectFormProps) => {
  return (
    <>
      <div className='mb-5 space-y-3'>
        <label htmlFor='projectName' className='dark:text-white text-sm uppercase font-bold'>
          Project Name
        </label>
        <input
          id='projectName'
          className='dark:placeholder:text-primary-dark/5 w-full p-3 border'
          type='text'
          placeholder='Project Name'
          {...register('projectName', {
            required: 'The Project Name is required',
          })}
        />

        {errors.projectName && <ErrorMessage>{errors.projectName.message}</ErrorMessage>}
      </div>

      <div className='mb-5 space-y-3'>
        <label htmlFor='clientName' className='dark:text-white text-sm uppercase font-bold'>
          Client Name
        </label>
        <input
          id='clientName'
          className='dark:placeholder:text-primary-dark/5 dark:text-primary w-full p-3  border'
          type='text'
          placeholder='Client Name'
          {...register('clientName', {
            required: 'The Client Name is required',
          })}
        />

        {errors.clientName && <ErrorMessage>{errors.clientName.message}</ErrorMessage>}
      </div>

      <div className='mb-5 space-y-3'>
        <label htmlFor='description' className='dark:text-white text-sm uppercase font-bold'>
          Description
        </label>
        <textarea
          id='description'
          className='dark:placeholder:text-primary-dark/5 w-full p-3  border'
          placeholder='Descripción del Proyecto'
          {...register('description', {
            required: false,
          })}
        />

        {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
      </div>
    </>
  )
}
