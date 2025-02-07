import { ChangeEvent } from 'react';
import { SubmitButton, AccountContainer, InputField } from 'src/components';

interface SignupBasicInfoProps {
  onSubmit?: () => void;
  handleInput: (
    key: 'id' | 'pw' | 'pwCheck' | 'name' | 'phoneNum' | 'detailAddress'
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignupBasicInfo = ({ onSubmit, handleInput }: SignupBasicInfoProps) => {
  return (
    <>
      <AccountContainer title='계정 생성'>
        <InputField
          label='사용하실 이메일을 기입해 주세요'
          type='email'
          placeholder='pieceofcake@gmail.com'
          className='mt-[48px]'
          buttonLabel='중복확인'
          onChange={handleInput('id')}
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
            onChange={handleInput('name')}
          />
          <InputField
            label='전화번호 / 연락처'
            type='tel'
            placeholder='010-0000-0000'
            className='w-auto flex-1'
            onChange={handleInput('phoneNum')}
          />
        </div>
        <InputField
          label='사용하실 비밀번호를 입력해 주세요'
          type='password'
          placeholder='Password'
          className='mt-[32px]'
          onChange={handleInput('pw')}
        />
        <InputField
          label='비밀번호 재확인*'
          type='password'
          placeholder='Password'
          className='mt-[32px]'
          onChange={handleInput('pwCheck')}
        />
        <SubmitButton onClick={onSubmit} className='mt-[52px]'>
          계정 생성하기 1/2
        </SubmitButton>
      </AccountContainer>
    </>
  );
};

export default SignupBasicInfo;
