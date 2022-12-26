import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface UserModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserModal = ({ setModal }: UserModalProps) => {
  const navigator = useNavigate();
  const handleBackStep = () => {
    setModal(false);
  };

  const handleGoFortuneList = () => {
    navigator('/fortune');
  };

  return (
    <UserModalContainer>
      <div className='modal'>
        <p className='sub-title-1-eb c-bk title'>이메일 중복</p>
        <p className='body-txt-1 c-gy-700 content'>
          이전에 작성하신 내용이 있습니다.
          <br />
          새로운 내용으로 덮어씌우시겠습니까?
        </p>
        <button className='sub-title-1 c-bk' onClick={handleBackStep}>
          돌아가기
        </button>
        <button className='sub-title-1 c-bk' onClick={handleGoFortuneList}>
          덮어씌우고 작성하기
        </button>
      </div>
    </UserModalContainer>
  );
};

export default UserModal;

const UserModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  min-height: 100vh;
  width: 100%;
  max-width: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000066;
  transform: translate(-50%);
  z-index: 999;

  .modal {
    width: 100%;
    max-width: 400px;
    margin: 0 20px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.p_light};
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    text-align: center;

    .title {
      margin-bottom: 12px;
    }

    .content {
      margin-bottom: 32px;
    }

    button {
      padding: 12px 24px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 6px;
      background-color: #fff;

      &:first-of-type {
        margin-right: 16px;
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.p_light};
      }
    }
  }
`;
