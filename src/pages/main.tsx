import temp from '../assets/images/temp.png';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div
      className='
      mt-[80px] px-[160px] flex items-center justify-center gap-[120px]
    '
    >
      <div
        className='
          flex flex-col items-start justify-center
        '
      >
        <img src={logo} className='w-[185px] mb-[12px]' alt='' />
        <span
          className={`
            font-['CHAB'] text-[48px] text-[#23717D] font-[400]
            leading-[48px] mb-[24px]
          `}
        >
          간편한 나만의 케이크,
          <br />
          지금 주문해보세요!
        </span>
        <span
          className={`
            text-[#A6C1C5] text-[16px] leading-[24px]
            mb-[32px]
          `}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elidolor
          <br />
          mattis sit phasellus mollis sit aliquam sit nullam neques.
        </span>
        <div className='flex items-center justify-start gap-[16px]'>
          <Link
            to='/accounts/signup'
            className='
              px-[18px] py-[14px] rounded-[6px]
              shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]
              bg-[#A6C1C5] text-[14px] leading-[14px] text-[#FFF] font-[600]
            '
          >
            계정 만들기
          </Link>
          <Link
            to='/'
            className='
              px-[18px] py-[14px] rounded-[6px]
              border-[1px_solid #E1E4ED]
              bg-[#F8FAFF] text-[14px] leading-[14px] text-[#A6C1C5] font-[600]
            '
          >
            내 주변 가게 들러보기
          </Link>
        </div>
      </div>
      <div className='relative w-[540px] h-[520px]'>
        <img
          src={temp}
          className='
            w-[340px] absolute left-0 bottom-0
            rounded-[8px]
          '
          alt=''
        />
        <img
          src={temp}
          className='
            w-[340px] absolute right-0 top-0
            rounded-[8px] shadow-[0px_5px_15px_0px_rgba(25,33,61,0.11)]
          '
          alt=''
        />
      </div>
    </div>
  );
};

export default Main;
