import { useState } from 'react';
import {
  SignupTerms,
  SignupBasicInfo,
  SignupAddressInfo,
} from 'src/components';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    console.log(step);
    if (step < 2) {
      setStep((step) => step + 1);
    }
  };

  if (step === 0) return <SignupTerms onSubmit={nextStep} />;
  if (step === 1) return <SignupBasicInfo onSubmit={nextStep} />;
  return (
    <SignupAddressInfo onSubmit={() => navigate('/accounts/signup/success')} />
  );
};

export default Signup;
