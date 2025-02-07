import { ChangeEvent, useEffect, useState } from 'react';
import { Address } from 'react-daum-postcode';

type SignupFormType = {
  id: string;
  pw: string;
  pwCheck: string;
  name: string;

  phoneNum: string;
  agreementOfMarketing: boolean;

  address?: string;
  detailAddress?: string;

  latitude?: number;
  longitude?: number;
};

const useSignupForm = () => {
  const [signupForm, setSignupForm] = useState<SignupFormType>({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    phoneNum: '',
    agreementOfMarketing: false,
  });

  const [idChecked, setIdChecked] = useState<boolean>(false);

  const checkIdDuplicate = async () => {
    const res = await fetch('http://52.78.143.39:8080/user/check');
    if (res.status === 200) {
      alert('사용 가능한 아이디입니다!');
      setIdChecked(true);
    }
  };

  const phoneRegex = /^0\d{1,2}-\d{3,4}-\d{4}$/;
  const page1Checked =
    signupForm.pw !== '' &&
    signupForm.pwCheck !== '' &&
    signupForm.pw === signupForm.pwCheck &&
    signupForm.name.length >= 2 &&
    phoneRegex.test(signupForm.phoneNum);

  const page2Checked =
    signupForm.address &&
    signupForm.address !== '' &&
    signupForm.detailAddress &&
    signupForm.detailAddress !== '' &&
    signupForm.latitude &&
    signupForm.longitude;

  const [addressOpened, setAddressOpened] = useState<boolean>(false);

  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step === 1) {
      if (!page1Checked) {
        alert('모든 정보를 입력하세요.');
        return;
      }
      setStep((step) => step + 1);
    }
    if (step === 0) {
      setStep((step) => step + 1);
    }
  };

  const toggleAddress = () => {
    setAddressOpened((prev) => !prev);
  };

  const setAddress = (address: Address) => {
    setSignupForm((prev) => ({ ...prev, address: address.address }));
  };

  const handleInput =
    (key: 'id' | 'pw' | 'pwCheck' | 'name' | 'phoneNum' | 'detailAddress') =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setSignupForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  useEffect(() => {
    const { address, detailAddress } = signupForm;
    if (address && detailAddress) {
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(
        signupForm.address + ', ' + signupForm.detailAddress,
        (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const { x, y } = data[0];
            console.log(x, y);
            setSignupForm((prev) => ({
              ...prev,
              latitude: Number.parseFloat(y),
              longitude: Number.parseFloat(x),
            }));
          }
        }
      );
    }
  }, [signupForm.address, signupForm.detailAddress]);

  const handleSubmit = async () => {
    if (!page2Checked) {
      alert('주소를 입력하세요.');
      return;
    }

    const body = {
      email: signupForm.id,
      loginPwd: signupForm.pw,
      name: signupForm.name,
      phoneNum: signupForm.phoneNum,
      address: signupForm.address + ', ' + signupForm.detailAddress,
      agreementOfMarketing: true,
      latitude: signupForm.latitude,
      longitude: signupForm.longitude,
    };

    const res = await fetch('http://52.78.143.39:8080/user/save', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.status === 201) {
      setStep(3);
    } else {
      alert('회원가입에 실패했습니다. 다시 시도하세요.');
    }
  };

  return {
    handleSubmit,
    handleInput,
    idChecked,
    setIdChecked,
    signupForm,
    addressOpened,
    toggleAddress,
    setAddress,
    step,
    nextStep,
    checkIdDuplicate,
  };
};

export default useSignupForm;
