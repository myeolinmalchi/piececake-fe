import SubmitButton from '../../../common/buttons/SubmitButton';
import AccountContainer from '../common/AccountContainer';
import { useNavigate } from 'react-router-dom';
import muffin from '../../../../assets/images/muffin.png';

const Success = () => {
  const navigate = useNavigate();
  return (
    <AccountContainer
      title='환영합니다!'
      subtitle={
        <>
          계정 생성을 축하합니다!
          <br />
          쉽고 간편하게 레터링 케이크를 주문해 보세요!
        </>
      }
    >
      <img src={muffin} className='w-[400px] h-[401px] mt-[36px]' alt='' />
      <SubmitButton onClick={() => navigate('/')} className='mt-[80px]'>
        홈으로 돌아가기
      </SubmitButton>
    </AccountContainer>
  );
};

export default Success;
