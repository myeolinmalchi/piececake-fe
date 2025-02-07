import { TabContainer, InfoForm } from 'src/components';
import logo from 'assets/images/logo.png';
import useMypageForm from 'src/hooks/accounts/useMypageForm';
import { useAuthStore } from 'stores/user/auth';
import { Navigate } from 'react-router-dom';

const MypageInfo = () => {
  const { mypageForm, handleForm } = useMypageForm();
  const { accessToken } = useAuthStore();

  if (!accessToken) return <Navigate to='/accounts/login' />;

  return (
    <>
      <TabContainer className='mt-[10px]' />
      <InfoForm mypageForm={mypageForm} handleForm={handleForm} />
      <div
        className='
          absolute top-[173px] left-1/2
          translate-x-[calc(-100%-226px-80px)]
          flex flex-col align-start justify-start
        '
      >
        <img src={logo} className='w-[139px] mb-[12px]' alt='' />
        <span
          className={`
            font-['CHAB'] text-[48px] text-[#23717D] font-[400]
            leading-[48px] mb-[24px]
          `}
        >
          나의 정보
        </span>
        <span
          className={`
            rounded-[4px] bg-white p-[12px]
            shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]
            text-[12px] text-[#23717D] w-fit leading-[12px]
          `}
        >
          회원정보 수정하기
        </span>
      </div>
    </>
  );
};

export default MypageInfo;
