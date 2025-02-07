import InputField from '../../../common/forms/InputField';
import { Link } from 'react-router-dom';
import SubmitButton from '../../../common/buttons/SubmitButton';
import useLoginForm from 'src/hooks/accounts/useLoginForm';
import { useAuthStore } from 'stores/user/auth';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const { handleSubmit, handleId, handlePw, loginForm } = useLoginForm();
  const { accessToken } = useAuthStore();

  if (accessToken) return <Navigate to='/mypage/info' />;

  return (
    <>
      <InputField
        label='이메일 주소를 입력해 주세요'
        type='email'
        placeholder='pieceofcake@gmail.com'
        className='mt-[48px]'
        onChange={handleId}
        value={loginForm.id}
      />

      <InputField
        label='비밀번호를 입력해 주세요'
        type='password'
        placeholder='your password'
        className='mt-[32px]'
        onChange={handlePw}
        value={loginForm.pw}
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
      <SubmitButton className='mt-[48px]' onClick={handleSubmit}>
        로그인하기
      </SubmitButton>
      <span className='text-[#808080] mt-[12px]'>
        신규 사용자이신가요?&nbsp;
        <Link to='/accounts/signup' className='text-[#6295FB]'>
          계정 만들기
        </Link>
      </span>
    </>
  );
};

export default LoginForm;
