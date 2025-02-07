import { ChangeEvent, useState } from 'react';
import { useAuthStore } from 'stores/user/auth';

const useLoginForm = () => {
  const [loginForm, setLoginForm] = useState<{ id: string; pw: string }>({
    id: '',
    pw: '',
  });

  const handleId = (e: ChangeEvent<HTMLInputElement>) =>
    setLoginForm((prev) => ({ ...prev, id: e.target.value }));
  const handlePw = (e: ChangeEvent<HTMLInputElement>) =>
    setLoginForm((prev) => ({ ...prev, pw: e.target.value }));

  const { login } = useAuthStore();

  const handleSubmit = () => {
    login(loginForm.id, loginForm.pw);
  };

  return {
    loginForm,
    handleSubmit,
    handleId,
    handlePw,
  };
};

export default useLoginForm;
