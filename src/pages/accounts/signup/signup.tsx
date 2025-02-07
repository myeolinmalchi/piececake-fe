import {
  SignupTerms,
  SignupBasicInfo,
  SignupAddressInfo,
} from 'src/components';
import useSignupForm from 'src/hooks/accounts/useSignupForm';
import { SignupSuccess } from '.';

const Signup = () => {
  const {
    handleSubmit,
    handleInput,
    signupForm,
    addressOpened,
    toggleAddress,
    setAddress,
    step,
    nextStep,
  } = useSignupForm();

  if (step === 0) return <SignupTerms onSubmit={nextStep} />;
  if (step === 1)
    return <SignupBasicInfo handleInput={handleInput} onSubmit={nextStep} />;
  if (step === 2)
    return (
      <SignupAddressInfo
        toggleAddress={toggleAddress}
        addressOpened={addressOpened}
        address={signupForm.address}
        handleDetailAddress={handleInput('detailAddress')}
        setAddress={setAddress}
        onSubmit={handleSubmit}
      />
    );

  return <SignupSuccess />;
};

export default Signup;
