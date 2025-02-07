import main1 from 'assets/images/main/main-1.png';
import main2 from 'assets/images/main/main-2.png';
import logo from 'assets/images/logo.png';
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
            text-[#23717D] text-[16px] leading-[24px]
            mb-[32px]
          `}
        >
          특별한 날을 더욱 의미 있게 만들어 보세요. 당신만의 맞춤
          케이크를제공합니다.
          <br />
          세상에 단 하나뿐인 레터링 케이크큰 소중한 기념과 사랑의 나눔을 담아,
          <br />
          당신의 특별한 순간을 더욱 빛나게 해줄 거예요!
        </span>
        <div className='flex items-center justify-start gap-[16px]'>
          <Link
            to='/accounts/signup'
            className='
              px-[18px] py-[14px] rounded-[6px]
              shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]
              bg-[#23717D] text-[14px] leading-[14px] text-[#FFF] font-[600]
            '
          >
            계정 만들기
          </Link>
          <Link
            to='/stores'
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
          src={main2}
          className='
            w-[328px] absolute left-0 bottom-0 z-10
            rounded-[8px] shadow-[-9px_9px_20px_5px_rgba(173,158,158,0.37)]
            object-fit
          '
          alt=''
        />
        <img
          src={main1}
          className='
            w-[385px] absolute right-0 top-0
            rounded-[8px] shadow-[0px_5px_15px_0px_rgba(25,33,61,0.11)]
          '
          alt=''
        />
      </div>
    </div>
  );
};

export default Main;
