import { Logo } from '@/components/Logo'
import { NavMenu } from '@/components/NavMenu'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

export const AppLayout = () => {
  return (
    <div className='dark:bg-background-dark'>
      <header className='py-5 dark:bg-primary-dark'>
        <div className='mx-10 flex flex-row justify-between items-center'>
          <div className='w-52'>
            <Logo />
          </div>

          <NavMenu />
        </div>
      </header>

      <section className='max-w-screen-2xl mx-auto mt-10 p-5'>
        <Outlet />
      </section>

      <footer className='py-5'>
        <p className='dark:text-white text-center font-semibold'>All rights reserved {new Date().getFullYear()}</p>
      </footer>

      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </div>
  )
}
