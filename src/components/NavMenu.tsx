import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const NavMenu = () => {
  return (
    <Popover className='relative'>
      <PopoverButton className='lg:hidden inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-purple-400'>
        <Bars3Icon className='w-12 h-12 text-white' />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <PopoverPanel className='absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48'>
          <div className='w-full lg:w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5'>
            <p className='text-center'>Hi: User</p>
            <Link to='/profile' className='block p-2 hover:text-purple-950'>
              Profile
            </Link>
            <Link to='/' className='block p-2 hover:text-purple-950'>
              Projects
            </Link>
            <button className='block p-2 hover:text-purple-950' type='button' onClick={() => {}}>
              Logout
            </button>
          </div>
        </PopoverPanel>
      </Transition>

      <div className='hidden lg:flex gap-6'>
        <Link
          to='/profile'
          className='lg:text-3xl lg:block text-sm font-semibold leading-6 text-gray-900 hover:text-purple-950'
        >
          Profile
        </Link>

        <Link
          to='/'
          className='lg:text-3xl lg:block text-sm font-semibold leading-6 text-gray-900 hover:text-purple-950'
        >
          Projects
        </Link>

        <button
          className='lg:text-3xl lg:block text-sm font-semibold leading-6 text-gray-900 hover:text-purple-950'
          type='button'
          onClick={() => {}}
        >
          Logout
        </button>
      </div>
    </Popover>
  )
}
