import styled from 'styled-components';

const ResultModal = ({ type }: { type: 'copy' | 'save' }) => {
  return (
    <>
      {type === 'copy' && (
        <ResultModalContainer className='body-txt-1 c-bk'>URL이 복사되었습니다.</ResultModalContainer>
      )}
      {type === 'save' && (
        <ResultModalContainer className='body-txt-1 c-bk'>이미지가 저장되었습니다.</ResultModalContainer>
      )}
    </>
  );
};

export default ResultModal;

const ResultModalContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 300px;
  padding: 16px 48px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.p_mid};
  border-radius: 6px;
  text-align: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
`;
