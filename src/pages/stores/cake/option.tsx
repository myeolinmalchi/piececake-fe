import CakeContainer from 'components/pages/stores/cake/CakeContainer';
import CakeOption from 'components/pages/stores/cake/CakeOption';
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAuthStore } from 'stores/user/auth';
import { CakeDetail } from 'types/store/cake';

const CakeOptionPage = () => {
  const { id, cakeId } = useParams();
  const { accessToken } = useAuthStore();
  const [detail, setDetail] = useState<CakeDetail | null>();

  useEffect(() => {
    if (!accessToken) return;
    const run = async () => {
      const res = await fetch(
        `http://52.78.143.39:8080/public/cakes/detail/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.status === 200) {
        const body = await res.json();
        setDetail(body);
      } else {
        alert('일시적인 오류가 발생했습니다.');
      }
    };

    run();
  }, [accessToken]);

  if (!accessToken) return <Navigate to='/accounts/login' />;

  if (!detail) return <></>;

  return (
    <div
      className={`
        w-full flex flex-col items-center justify-start
        px-[80px] py-[48px] z-10
        bg-[url('/images/order-bg.png')] bg-top bg-repeat-y bg-cover
      `}
    >
      <CakeContainer
        label={'주문하기'}
        leftSection={
          <img
            className='w-[520px] aspect-square rounded-[8px]'
            src={detail.cakeImage}
          />
        }
        rightSection={
          <CakeOption
            cakeId={Number.parseInt(cakeId ?? '')}
            storeId={id ?? ''}
            name={detail.cakeName ?? ''}
            description={detail.description}
            price={detail.price}
            options={detail.optionDtos}
          />
        }
      />
    </div>
  );
};

export default CakeOptionPage;
