import InputField from '../../../common/forms/InputField';
import { Link } from 'react-router-dom';
import SubmitButton from '../../../common/buttons/SubmitButton';
import NaverButton from './NaverButton';
import KakaoButton from './KakaoButton';

const LoginForm = () => {
  return (
    <>
      <InputField
        label='이메일 주소를 입력해 주세요'
        type='email'
        placeholder='pieceofcake@gmail.com'
        className='mt-[48px]'
      />

      <InputField
        label='비밀번호를 입력해 주세요'
        type='password'
        placeholder='your password'
        className='mt-[32px]'
      />
      <Link
        to='/'
        className={`
          self-end mt-[8px]
          text-[12px] text-[#4285F4]
        `}
      >
        비밀번호 찾기
      </Link>
      <SubmitButton className='mt-[48px]'>로그인하기</SubmitButton>
      <span className='text-[#808080] mt-[12px]'>
        신규 사용자이신가요?&nbsp;
        <Link to='/accounts/signup' className='text-[#6295FB]'>
          계정 만들기
        </Link>
      </span>
      <span className='mt-[40px] text-[#ABABAB] text-[16px]'>
        OR 소셜 계정으로 로그인
      </span>
      <span className='mt-[24px] text-[#23717D] self-start'>소셜 로그인</span>
      <div
        className='
          flex items-center justify-between 
          w-full gap-[20px] mt-[12px]
        '
      >
        <NaverButton />
        <KakaoButton />
      </div>
    </>
  );
};

export default LoginForm;
