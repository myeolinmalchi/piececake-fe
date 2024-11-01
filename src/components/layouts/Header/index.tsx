import MypageNav from './MypageNav';
import CenterNav from './CenterNav';
import Logo from './Logo';

const Header = () => {
  return (
    <>
      <div
        className='
          w-full fixed top-0 box-border 
          h-[72px] px-[75px] py-[18px] bg-none
          flex justify-between align-center
        '
      >
        <Logo />
        <CenterNav />
        <MypageNav />
      </div>
    </>
  );
};

export default Header;
