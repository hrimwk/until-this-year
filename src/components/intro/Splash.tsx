import styled from 'styled-components';

const Splash = () => {
  return (
    <Container>
      <h1 className='title-1 c-wt'>올해까치</h1>
    </Container>
  );
};

export default Splash;

const Container = styled.div`
  position: absolute;
  left: 50%;
  min-height: 100vh;
  width: 100%;
  max-width: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.p_mid};
  transform: translate(-50%);
  z-index: 999;
`;
