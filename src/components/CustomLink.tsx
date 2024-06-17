import { Link } from 'react-router-dom';
interface IProps {
  title: string;
  to: string;
  customClass?: string;
}
export const CustomLink = ({ title, to, customClass }: IProps) => {
  return (
    <Link
      className={`bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors ${customClass}`}
      to={to}
    >
      {title}
    </Link>
  );
};
