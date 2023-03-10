import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowBack from '../components/common/ArrowBack';
import Modal from '../components/fortuneList/Modal';
import usePreventLeave from '../assets/utils/result/usePreventLeave';
import ProgressiveImage from 'react-progressive-graceful-image';
import { useSetRecoilState } from 'recoil';
import { fortuneModalIdState } from '../../atom';

function FotuneList() {
  const [visible, setVisible] = useState(false);
  const setModalId = useSetRecoilState(fortuneModalIdState);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  const FORTUNE_LIST = [
    {
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434571/kkachi-admin/vef2jidsuk0uocukbpax.png',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612155/kkachi-admin/lwbaic8dz7bqitojnnlk.jpg',
      info: '연애/결혼',
      id: 'love',
      alt: 'love',
    },
    {
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434571/kkachi-admin/k2gfwtob5ltwigorwez9.png',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612155/kkachi-admin/laxpo9trvhjiga0ytlmz.jpg',
      info: '재물/돈',
      id: 'money',
      alt: 'money',
    },
    {
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434571/kkachi-admin/znu41gtjttgyl8losbi9.png',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612155/kkachi-admin/ppkqmzwpimyrwzedgwia.jpg',
      info: '대인관계',
      id: 'relationship',
      alt: 'relationship',
    },
    {
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434571/kkachi-admin/osdezinlwvujx8ga2b1u.png',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612155/kkachi-admin/tftkqz4ybdi5wzlkgp2q.jpg',
      info: '자아실현',
      id: 'ego',
      alt: 'ego',
    },
    {
      src: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675434571/kkachi-admin/hphwc0aaurwfb1kfslrm.png',
      low: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612155/kkachi-admin/q345b8oj8kgmytwhfwbh.jpg',
      info: '건강',
      id: 'health',
      alt: 'health',
    },
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
                <ProgressiveImage src={data.src} placeholder={data.low}>
                  {(src) => <img src={src} alt={data.alt} />}
                </ProgressiveImage>
                <span />
                <p className='fortune-info sub-title-1'>{data.info}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
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
