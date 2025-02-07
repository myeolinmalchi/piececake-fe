import { SubmitButton, AccountContainer, InputField } from 'src/components';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { Address } from 'react-daum-postcode';
import { ChangeEvent } from 'react';

interface SignupAddressInfoProps {
  onSubmit?: () => void;
  toggleAddress: () => void;
  addressOpened: boolean;

  address?: string;
  setAddress: (address: Address) => void;

  handleDetailAddress: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SignupAddressInfo = ({
  onSubmit,
  toggleAddress,
  addressOpened,

  address,
  setAddress,

  handleDetailAddress,
}: SignupAddressInfoProps) => {
  const detailAddrInputAvailable = address && address !== '';

  return (
    <>
      <AccountContainer title='계정 생성'>
        <InputField
          label='내 근처 가게 찾기! 도로명 주소 입력'
          type='text'
          placeholder={address ?? '주소를 기입하여 주십시오'}
          className='mt-[48px]'
          buttonLabel='검색'
          readonly
          tabindex={-1}
          buttonOnClick={toggleAddress}
        >
          {addressOpened && (
            <DaumPostcodeEmbed
              className='
                shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)]
                w-[150px] absolute right-0 top-[52px] z-10
              '
              onComplete={setAddress}
            />
          )}
        </InputField>
        {detailAddrInputAvailable && (
          <InputField
            type='text'
            placeholder='상세주소를 입력해 주세요.'
            className='mt-[32px]'
            onChange={handleDetailAddress}
          />
        )}
        <SubmitButton onClick={onSubmit} className='mt-[52px]'>
          계정 생성하기 2/2
        </SubmitButton>
      </AccountContainer>
    </>
  );
};

export default SignupAddressInfo;
