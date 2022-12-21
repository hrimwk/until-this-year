import styled from 'styled-components';
import ArrowBack from '../components/common/ArrowBack';
import fortune_love from '../assets/images/fortune_love.png';

function FotuneList() {
  const FORTUNE_LIST = [
    { src: fortune_love, info: '연애/결혼', id: 1 },
    { src: fortune_love, info: '재물/돈', id: 2 },
    { src: fortune_love, info: '대인관계', id: 3 },
    { src: fortune_love, info: '자아실현', id: 4 },
    { src: fortune_love, info: '건강', id: 5 },
  ];
  return (
    <FortuneListContainer className='container'>
      <ArrowBack />
      <div className='fortune-wrap'>
        <h2 className='title-2'>2023년 가장 받고 싶은 새해 복은?</h2>
        <div className='list-wrap'>
          {FORTUNE_LIST.map((data) => {
            return (
              <div className='fortune' key={data.id}>
                <img src={data.src} />
                <span />
                <p className='fortune-info'>{data.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </FortuneListContainer>
  );
}
const FortuneListContainer = styled.div`
  .title-2 {
    margin-top: 64px;
    text-align: center;
  }
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 56px;
    width: 100%;
  }
  .fortune {
    padding: 0 20px;
    margin-bottom: 32px;
    width: 50%;
    text-align: center;
    span {
      display: block;
      margin: 10px 0 10px;
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors.border};
    }
  }
`;
export default FotuneList;
