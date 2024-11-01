import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Logo = () => {
  return (
    <Link className='flex items-center' to='/'>
      <img src={logo} alt='' className='h-[24px] aspect-[491/100]' />
    </Link>
  );
};

export default Logo;
