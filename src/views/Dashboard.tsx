import { CustomLink } from '@/components/CustomLink'
import { ProjectList } from '@/components/projects/List'
import { useGetProjectsQuery } from '@/provider/queries/project'
import { Navigate } from 'react-router-dom'

export const DashboardView = () => {
  const { data, isLoading, isError } = useGetProjectsQuery()
  if (isLoading) return 'Loading...'

  if (isError) return <Navigate to='/404' />

  return (
    <>
      <h1 className='dark:text-white text-5xl font-black'>Projects</h1>
      <p className='dark:text-secondary-dark text-2xl font-light text-gray-500 mt-5'>Manage your projects</p>

      <nav className='my-5'>
        <CustomLink title='Create Project' to='/projects/create' />
      </nav>

      {data?.length ? (
        <ProjectList projects={data}/>
      ) : (
        <p className='dark:text-white text-center py-20'>
          You don't have projects yet {''}
          <CustomLink title='Create Project' to='/projects/create' customClass='dark:text-secondary-dark text-[16px] hover:underline font-bold cursor-pointer transition-colors' />
        </p>
      )}
    </>
  )
}
