import SubmitButton from '../../../common/buttons/SubmitButton';
import AccountContainer from '../common/AccountContainer';
import InputField from '../../../common/forms/InputField';

interface SignupAddressInfoProps {
  onSubmit?: () => void;
}

const SignupAddressInfo = ({ onSubmit }: SignupAddressInfoProps) => {
  return (
    <>
      <AccountContainer title='계정 생성'>
        <InputField
          label='내 근처 가게 찾기! 도로명 주소 입력'
          type='text'
          placeholder='주소를 기입하여 주십시오'
          className='mt-[48px]'
          buttonLabel='검색'
        />
        <SubmitButton onClick={onSubmit} className='mt-[52px]'>
          계정 생성하기 2/2
        </SubmitButton>
      </AccountContainer>
    </>
  );
};

export default SignupAddressInfo;
