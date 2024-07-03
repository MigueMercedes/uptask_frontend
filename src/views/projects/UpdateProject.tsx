import { ProjectForm } from '@/components/projects/Form'
import { useGetOneProjectQuery, useUpdateProjectMutation } from '@/provider/queries/project'
import { ProjectFormData } from '@/types/projects'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export const UpdateProjectView = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProjectFormData>()

  const { data: projectData, isLoading, isError } = useGetOneProjectQuery(projectId!)

  const { mutate } = useUpdateProjectMutation(projectId!)

  const handleForm = (formData: ProjectFormData) => {
    mutate({
      id: projectId!,
      project: formData
    })

    navigate('/')
  }

  useEffect(() => {
    if (projectData) reset(projectData)
  }, [projectData, reset])

  if (isLoading) return <> Loading... </>
  if (isError) return <Navigate to='/404' />

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
  )
}
