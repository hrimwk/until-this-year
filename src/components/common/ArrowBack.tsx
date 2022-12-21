import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import arrow_back from '../../assets/images/arrow_back.png';

function ArrowBack() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <ArrowBackContainer onClick={onClick}>
      <img src={arrow_back} />
    </ArrowBackContainer>
  );
}
const ArrowBackContainer = styled.div`
  position: absolute;
  top: 14px;
  width: 44px;
  height: 44px;
  padding: 10px;
  cursor: pointer;
`;

export default ArrowBack;
