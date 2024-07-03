import { ProjectForm } from '@/components/projects/Form'
import { useCreateProjectMutation } from '@/provider/queries/project'
import { ProjectFormData } from '@/types/projects'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const initialValue: ProjectFormData = {
  projectName: '',
  clientName: '',
  description: ''
}

export const CreateProjectView = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProjectFormData>({ defaultValues: initialValue })

  const { mutate } = useCreateProjectMutation()

  const handleForm = (formData: ProjectFormData) => {
    mutate(formData)

    navigate('/')
  }

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
  )
}
