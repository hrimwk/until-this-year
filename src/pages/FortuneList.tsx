import styled from 'styled-components';
import ArrowBack from '../components/common/ArrowBack';
import fortune_love from '../assets/images/fortune_love.png';
import React, { useState } from 'react';
import Modal from '../components/common/Modal';

type PropsType = {
  fortune: string;
  setfortune: (data: string) => void;
};
function FotuneList(props: PropsType) {
  const { fortune, setfortune } = props;
  const [visible, setVisible] = useState(false);
  const [modalId, setModalId] = useState<string>('');

  const FORTUNE_LIST = [
    { src: fortune_love, info: '연애/결혼', id: 'love', alt: 'love' },
    { src: fortune_love, info: '재물/돈', id: 'money', alt: 'money' },
    { src: fortune_love, info: '대인관계', id: 'relationship', alt: 'relationship' },
    { src: fortune_love, info: '자아실현', id: 'ego', alt: 'ego' },
    { src: fortune_love, info: '건강', id: 'health', alt: 'health' },
  ];
  const modalClick = (e: React.MouseEvent) => {
    setVisible(true);
    setModalId(e.currentTarget.id);
  };

  return (
    <FortuneListContainer className='container'>
      <ArrowBack />
      <div className='fortune-wrap'>
        <h2 className='title-2'>2023년 가장 받고 싶은 새해 복은?</h2>
        <div className='list-wrap'>
          {FORTUNE_LIST.map((data) => {
            return (
              <div className='fortune' key={data.id} onClick={modalClick} id={data.id}>
                <img src={data.src} alt={data.alt} />
                <span />
                <p className='fortune-info sub-title-1'>{data.info}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible} modalId={modalId} setfortune={setfortune} />
    </FortuneListContainer>
  );
}
const FortuneListContainer = styled.div`
  .title-2 {
    margin-top: 56px;
    text-align: center;
  }
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 42px;
    width: 100%;
  }
  .fortune {
    padding: 0 20px;
    margin-bottom: 28px;
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
