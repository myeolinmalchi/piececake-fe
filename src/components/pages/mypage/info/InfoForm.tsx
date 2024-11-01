import InputField from '../../../common/forms/InputField';
import SubmitButton from '../../../common/buttons/SubmitButton';

const InfoForm = () => {
  return (
    <div className='w-[452px] flex flex-col align-center justify-start'>
      <InputField
        label='이메일 주소를 입력해 주세요'
        type='email'
        placeholder='pieceofcake@gmail.com'
        className='mt-[48px]'
      />

      <div
        className='
            mt-[28px] w-full gap-[20px]
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
        label='거주 주소'
        buttonLabel='주소찾기'
        type='text'
        placeholder='Password'
        className='mt-[28px]'
      />
      <InputField
        label='현재 비밀번호'
        type='password'
        placeholder='Password'
        className='mt-[28px]'
      />
      <InputField
        label='새 비밀번호'
        type='password'
        placeholder='Password'
        className='mt-[28px]'
      />
      <InputField
        label='새 비밀번호 재입력'
        type='password'
        placeholder='Password'
        className='mt-[28px]'
      />
      <SubmitButton className='mt-[32px]'>변경사항 저장하기</SubmitButton>
    </div>
  );
};

export default InfoForm;
