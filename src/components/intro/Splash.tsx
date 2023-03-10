import styled from 'styled-components';
import icon from '../../assets/images/favicon.png';

const Splash = () => {
  return (
    <Container>
      <span className='icon' />
      <h1 className='title-1 c-wt'>올해까치</h1>
    </Container>
  );
};

export default Splash;

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  min-height: 100vh;
  width: 100%;
  max-width: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.p_mid};
  transform: translate(-50%);
  z-index: 999;
  overflow: hidden;
  transform: translate(-50%, -50%);
  .icon {
    position: absolute;
    top: 44%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    background: url(${icon}) no-repeat;
    background-size: cover;
  }
  .title-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: moveTitle 0.6s 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.02) forwards;
  }

  @keyframes moveTitle {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
