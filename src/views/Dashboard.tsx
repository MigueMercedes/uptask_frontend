import { CustomLink } from '@/components/CustomLink';
import { ProjectList } from '@/components/projects/List';
import { useGetProjectsQuery } from '@/provider/queries/project';
import { Link, Navigate } from 'react-router-dom';

export const DashboardView = () => {
  const { data, isLoading, isError, error } = useGetProjectsQuery();

  if (isLoading) return 'Loading...';

  if (isError) return <Navigate to='/404' />;

  return (
    <>
      <h1 className='text-5xl font-black'>My Projects</h1>
      <p className='text-2xl font-light text-gray-500 mt-5'>Manage your projects</p>

      <nav className='my-5'>
        <CustomLink title='Create Project' to='/projects/create' />
      </nav>

      {data?.length ? (
        <ProjectList projects={data} />
      ) : (
        <p className='text-center py-20'>
          You don't have projects yet {''}
          <Link to='/projects/create' className='text-fuchsia-500 hover:text-fuchsia-600 font-bold'>
            Create Project
          </Link>
        </p>
      )}
    </>
  );
};
