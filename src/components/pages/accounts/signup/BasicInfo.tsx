import SubmitButton from '../../../common/buttons/SubmitButton';
import AccountContainer from '../common/AccountContainer';
import InputField from '../../../common/forms/InputField';

interface SignupBasicInfoProps {
  onSubmit?: () => void;
}

const SignupBasicInfo = ({ onSubmit }: SignupBasicInfoProps) => {
  return (
    <>
      <AccountContainer title='계정 생성'>
        <InputField
          label='사용하실 이메일을 기입해 주세요'
          type='email'
          placeholder='pieceofcake@gmail.com'
          className='mt-[48px]'
          buttonLabel='중복확인'
        />
        <div
          className='
            mt-[32px] w-full gap-[20px]
            flex items-center justify-between
          '
        >
          <InputField
            label='이름'
            type='text'
            placeholder='홍길동'
            className='w-auto flex-1'
          />
          <InputField
            label='전화번호 / 연락처'
            type='tel'
            placeholder='010-0000-0000'
            className='w-auto flex-1'
          />
        </div>
        <InputField
          label='사용하실 비밀번호를 입력해 주세요'
          type='password'
          placeholder='Password'
          className='mt-[32px]'
        />
        <InputField
          label='비밀번호 재확인*'
          type='password'
          placeholder='Password'
          className='mt-[32px]'
        />
        <SubmitButton onClick={onSubmit} className='mt-[52px]'>
          계정 생성하기 1/2
        </SubmitButton>
      </AccountContainer>
    </>
  );
};

export default SignupBasicInfo;
