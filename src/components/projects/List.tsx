import { useDeleteProjectMutation } from '@/provider/queries/project'
import { Project } from '@/types/projects'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  projects: Project[]
}

export const ProjectList = ({ projects }: IProps) => {
  const { mutate } = useDeleteProjectMutation()

  const handleDelete = (id: Project['_id']) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return

    mutate(id)
  }

  return (
    <ul
      role='list'
      className='
        border
        mt-10
        divide-y
        shadow-lg
        dark:bg-secondary-background-dark
        dark:divide-secondary-dark
        dark:border-secondary-dark
        bg-white
      '
    >
      {projects.map(project => (
        <li key={project._id} className='flex justify-between gap-x-6 px-5 py-10'>
          <div className='flex min-w-0 gap-x-4'>
            <div className='min-w-0 flex-auto space-y-2'>
              <Link
                to={`/projects/${project._id}`}
                className='dark:border-secondary-dark dark:text-secondary-dark cursor-pointer hover:underline text-3xl font-bold'
              >
                {project.projectName}
              </Link>
              <p className='dark:text-white text-sm text-gray-400'>
                <span className='font-bold'>Client:</span> {project.clientName}
              </p>
              <p className='text-sm text-gray-400'>{project.description}</p>
            </div>
          </div>
          <div className='flex shrink-0 items-center gap-x-6'>
            <Menu as='div' className='relative flex-none'>
              <MenuButton className='dark:text-white dark:hover:text-secondary-dark -m-2.5 block p-2.5'>
                <span className='sr-only'>Actions</span>
                <EllipsisVerticalIcon className='h-9 w-9' aria-hidden='true' />
              </MenuButton>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <MenuItems className='dark:border border-secondary-dark dark:bg-secondary-background-dark absolute right-0 z-10 mt-2 w-56 z rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                  <MenuItem>
                    <Link to={`/projects/${project._id}`} className='dark:text-white block px-3 py-1 text-sm leading-6 text-gray-900'>
                      View
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={`/projects/${project._id}/update`}
                      className='dark:text-white block px-3 py-1 text-sm leading-6 text-gray-900'
                    >
                      Edit
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      type='button'
                      className='block px-3 py-1 text-sm leading-6 text-red-500'
                      onClick={() => handleDelete(project._id)}
                    >
                      Remove
                    </button>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  )
}
