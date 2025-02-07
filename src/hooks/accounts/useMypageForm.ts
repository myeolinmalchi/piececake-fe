import { ChangeEvent, useLayoutEffect, useState } from 'react';
import { useAuthStore } from 'stores/user/auth';
import { useNavigate } from 'react-router-dom';

type MypageFormType = {
  name: string;
  phoneNum: string;
  email: string;
  address: string;
};

const useMypageForm = () => {
  const [mypageForm, setMypageForm] = useState<MypageFormType>({
    email: '',
    name: '',
    phoneNum: '',
    address: '',
  });
  const { accessToken, userId } = useAuthStore();
  const navigate = useNavigate();

  const [newPwdOpened, setNewPwdOpened] = useState<boolean>(false);

  const toggleNewPwd = () => setNewPwdOpened((prev) => !prev);

  useLayoutEffect(() => {
    const loadMypage = async () => {
      const res = await fetch(
        `http://52.78.143.39:8080/user/myPage/${userId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.status === 200) {
        const data = await res.json();
        setMypageForm({
          name: data.name,
          phoneNum: data.phoneNum,
          email: data.email,
          address: data.address,
        });
      } else {
        alert('로그인 후 사용하세요.');
        navigate('/account/login');
      }
    };

    if (accessToken) {
      loadMypage();
    }
  }, [accessToken]);

  const handleForm =
    (key: keyof MypageFormType) => (e: ChangeEvent<HTMLInputElement>) => {
      setMypageForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  return {
    mypageForm,
    handleForm,
    newPwdOpened,
    toggleNewPwd,
  };
};

export default useMypageForm;
export type { MypageFormType };
