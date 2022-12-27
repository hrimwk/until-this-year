import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Splash from '../components/intro/Splash';
import mock2 from '../assets/images/mock2.png';

function Intro() {
  const [splash, setSplash] = useState(true);
  const navigate = useNavigate();

  setTimeout(() => setSplash(false), 1500);

  const clickButton = () => {
    navigate('/user');
  };

  return (
    <IntroContainer>
      {splash && <Splash />}
      <section className='top-img-area'>
        <h2 className='title-2'>어느새 새로운 해가 찾아왔네요</h2>
        <img src={mock2} alt='설명 이미지' />
      </section>
      <section className='bottom-text-area'>
        <h2 className='title-2'>
          당신을 위해 복을 물어 올 까치와 함께
          <br /> 올해 목표를 세워보세요!
        </h2>
        <p className='body-txt-1 c-gy-900 mb-12'>
          올해 가장 받고 싶은 복을 선택하면 까치가 찾아올 거예요.
          <br /> 복을 물어 올 까치와 함께 신년 목표를 세워보세요.
        </p>
        <p className='body-txt-1 c-gy-900'>
          바쁘게 살다 보면 목표를 잊을 때도 있지만,
          <br />
          걱정 마세요. 까치가 6개월 뒤에 메일로 다시 알려드려요!
        </p>
      </section>
      <section className='button-area'>
        <button className='btn-txt-eb' onClick={clickButton}>
          시작하기
        </button>
      </section>
    </IntroContainer>
  );
}
const IntroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-bottom: 20px;
  min-height: 100vh;
  max-width: 430px;
  .top-img-area {
    position: relative;
    height: fit-content;
    .title-2 {
      position: absolute;
      top: 24px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      opacity: 0;
      animation: moveIntroTitle 4s 1.7s cubic-bezier(0.09, 0.775, 0.01, 0.65) forwards;
    }
    @keyframes moveIntroTitle {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 100%;
        opacity: 1;
      }
    }
  }
  .bottom-text-area {
    padding: 32px 20px 80px;
    .title-2 {
      margin-bottom: 24px;
    }
    .mb-12 {
      margin-bottom: 12px;
    }
  }
  .button-area {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 430px;
    padding: 20px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 88%,
      rgba(255, 255, 255, 0.6) 100%
    );
    button {
      padding: 18px 0;
      width: 100%;
      border: none;
      color: #fff;
      border-radius: 6px;
      background: ${(props) => props.theme.colors.p_dark};
    }
  }
`;

export default Intro;
