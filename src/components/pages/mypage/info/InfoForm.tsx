import { ChangeEvent } from 'react';
import { InputField, SubmitButton } from 'src/components';
import type { MypageFormType } from 'src/hooks/accounts/useMypageForm';

type InfoFormProps = {
  handleForm: (
    key: keyof MypageFormType
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  mypageForm: MypageFormType;
};

const InfoForm = ({ handleForm, mypageForm }: InfoFormProps) => {
  return (
    <div className='w-[452px] flex flex-col align-center justify-start'>
      <InputField
        label='이메일 주소'
        type='email'
        placeholder='pieceofcake@gmail.com'
        className='mt-[48px]'
        onChange={handleForm('email')}
        value={mypageForm['email']}
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
          onChange={handleForm('name')}
          value={mypageForm['name']}
        />
        <InputField
          label='전화번호 / 연락처'
          type='tel'
          placeholder='010-0000-0000'
          className='w-auto flex-1'
          onChange={handleForm('phoneNum')}
          value={mypageForm['phoneNum']}
        />
      </div>

      <InputField
        label='거주 주소'
        buttonLabel='주소찾기'
        type='text'
        placeholder='도로명 주소'
        className='mt-[28px]'
        onChange={handleForm('address')}
        value={mypageForm['address']}
        readonly
        tabindex={-1}
      />
      <InputField
        label='비밀번호'
        type='password'
        placeholder='*********'
        value={'******'}
        className='mt-[28px]'
        buttonLabel='비밀번호 변경'
        readonly
        tabindex={-1}
      />
      <SubmitButton className='mt-[48px]'>변경사항 저장하기</SubmitButton>
    </div>
  );
};

export default InfoForm;
