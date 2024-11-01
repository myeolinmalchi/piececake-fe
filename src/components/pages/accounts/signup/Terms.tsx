import SubmitButton from '../../../common/buttons/SubmitButton';
import AccountContainer from '../common/AccountContainer';

interface SignupTermsProps {
  onSubmit?: () => void;
}

const SignupTerms = ({ onSubmit }: SignupTermsProps) => {
  return (
    <AccountContainer
      title='이용약관 동의'
      subtitle='원활한 서비스 이용을 위해 이용약관에 동의해 주세요.'
    >
      <span className='text-[12px] text-[#23717D] mt-[400px]'>
        약관을 다 읽었고, 이에 동의합니다.
      </span>
      <SubmitButton onClick={onSubmit} className='mt-[24px]'>
        계정 생성하러 가기!
      </SubmitButton>
    </AccountContainer>
  );
};

export default SignupTerms;
