import { Link } from 'react-router-dom'
interface IProps {
  title: string
  to: string
  customClass?: string
}
export const CustomLink = ({ title, to, customClass }: IProps) => {
  return (
    <Link
      className={`${customClass ? customClass : 'dark:bg-primary-dark dark:hover:bg-tertiary-dark px-6 py-3 text-white text-xl font-bold cursor-pointer transition-colors'}`}
      to={to}
    >
      {title}
    </Link>
  )
}
