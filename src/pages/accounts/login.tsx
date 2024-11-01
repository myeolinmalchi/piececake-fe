import AccountContainer from '../../components/pages/accounts/common/AccountContainer';
import LoginForm from '../../components/pages/accounts/login/LoginForm';

const Login = () => {
  return (
    <>
      <AccountContainer title='로그인!'>
        <LoginForm />
      </AccountContainer>
    </>
  );
};

export default Login;
