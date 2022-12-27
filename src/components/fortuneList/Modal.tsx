import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import FortuneModal from './FortuneModal';
import exit from '../../assets/images/exit.png';
import { useNavigate } from 'react-router-dom';

type propsType = {
  visible: boolean;
  setVisible: (data: boolean) => void;
  modalId: string;
};

function Modal(props: propsType) {
  const { visible, setVisible, modalId } = props;
  const navigate = useNavigate();
  const node = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setVisible(false);
  };
  const clickButton = () => {
    sessionStorage.setItem('fortune-type', modalId);
    navigate('/write');
  };

  useEffect(() => {
    if (visible === true) {
      document.body.style.cssText = `overflow: hidden`;
      return () => {
        document.body.style.cssText = `overflow: auto`;
      };
    }
  }, [visible]);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (visible && node.current && !node.current.contains(target)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [visible]);

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper visible={visible}>
        <ModalInner ref={node}>
          <FortuneModal modalId={modalId} />
          <span className='modal-close' onClick={closeModal}>
            <img src={exit} alt='exit' />
          </span>
          <div className='modal-button-area'>
            <button className='sub-title-1 c-bk' onClick={clickButton}>
              선택하기
            </button>
          </div>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

const ModalOverlay = styled.div`
  display: ${({ visible }: { visible: boolean }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const ModalWrapper = styled.div`
  display: ${({ visible }: { visible: boolean }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const ModalInner = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 90%;
  max-width: 340px;
  min-height: 600px;
  height: 74%;
  margin: 0 auto;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0, 0, 0, 8px rgba(0, 0, 0, 0.25);
  .modal-close {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 44px;
    height: 44px;
    padding: 10px;
    cursor: pointer;
  }
  .modal-button-area {
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 100%;
    padding: 0 20px;
    button {
      width: 100%;
      padding: 12px 0;
      background: #fff;
      border: 1px solid #eeeeee;
      border-radius: 6px;
      &:active {
        border: none;
        background: ${({ theme }) => theme.colors.p_light};
      }
    }
  }
`;
export default Modal;
