import { useLocation, Link } from 'react-router-dom';

interface TabProps {
  path: string;
  label: string;
}

const Tab = ({ path, label }: TabProps) => {
  const { pathname } = useLocation();

  if (path !== pathname) {
    return (
      <Link
        to={path}
        className='
          text-[#23717D] text-[16px]
          w-[120px] h-[50px] flex items-center justify-center
        '
      >
        {label}
      </Link>
    );
  }
  return (
    <Link
      to={path}
      className='
        w-[120px] h-[50px] rounded-[40px] bg-[#FF8E7A]
        shadow-mypageButton flex justify-center items-center
        text-[16px] text-[#FFF]
      '
    >
      {label}
    </Link>
  );
};

export default Tab;
