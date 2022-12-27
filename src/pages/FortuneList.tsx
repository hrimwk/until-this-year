import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowBack from '../components/common/ArrowBack';
import Modal from '../components/fortuneList/Modal';
import usePreventLeave from '../assets/utils/result/usePreventLeave';

import love from '../assets/images/fortune/bag_love.png';
import money from '../assets/images/fortune/bag_money.png';
import relationship from '../assets/images/fortune/bag_relationship.png';
import ego from '../assets/images/fortune/bag_ego.png';
import health from '../assets/images/fortune/bag_health.png';

function FotuneList() {
  const [visible, setVisible] = useState(false);
  const [modalId, setModalId] = useState<string>('');

  const { enablePrevent, disablePrevent } = usePreventLeave();

  const FORTUNE_LIST = [
    { src: love, info: '연애/결혼', id: 'love', alt: 'love' },
    { src: money, info: '재물/돈', id: 'money', alt: 'money' },
    { src: relationship, info: '대인관계', id: 'relationship', alt: 'relationship' },
    { src: ego, info: '자아실현', id: 'ego', alt: 'ego' },
    { src: health, info: '건강', id: 'health', alt: 'health' },
  ];

  useEffect(() => {
    enablePrevent();

    return () => disablePrevent();
  }, []);

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
      <Modal visible={visible} setVisible={setVisible} modalId={modalId} />
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
    cursor: pointer;
    span {
      display: block;
      margin: 10px 0 10px;
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.colors.border};
    }
  }
`;
export default FotuneList;
