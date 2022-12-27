import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toPng } from 'html-to-image';
import styled, { DefaultTheme } from 'styled-components';

import Share from '../components/result/Share';
import htmlToPng from '../assets/utils/result/htmlToPng';
import { frontCardUrl, backCardUrl, getAssetUrl } from '../../src/assets/utils/result/assetsUrl';
import { getFortuneColor, KkachiColorProps } from '../assets/utils/write/getFortuneColor';

interface ResultProps {
  name: string;
  email: string;
  goalList: { id: number; content: string }[];
}

function Result({ name, email, goalList }: ResultProps) {
  const goalRef = useRef<HTMLDivElement>(null);
  const kkachiRef = useRef<HTMLDivElement>(null);
  const navigator = useNavigate();
  const [imgUrl, setImgUrl] = useState<string>();
  const [flip, setFlip] = useState(false);
  const fortune = sessionStorage.getItem('fortune-type');

  const downloadImg = () => {
    if (goalRef.current === null || kkachiRef.current === null) return;
    flip ? htmlToPng(goalRef) : htmlToPng(kkachiRef);
  };

  const goMain = () => {
    navigator('/');
    location.reload();
  };

  useEffect(() => {
    if (goalRef.current === null) return;
    toPng(goalRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const formData = new FormData();
        formData.append('file', dataUrl);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_PRESET);
        formData.append('folder', 'kkachi');
        fetch(import.meta.env.VITE_CLOUDINARY_URL, {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.json())
          .then((res) => {
            setImgUrl(res.url);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [goalRef, kkachiRef]);

  useEffect(() => {
    if (imgUrl) {
      axios
        .post('http://localhost:8080/users/image', { email, image: imgUrl })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [imgUrl]);

  const handleCardFlip = () => setFlip((prev) => !prev);

  return (
    <ResultContainer className='container'>
      <p className='sub-title-1 c-gy-500 desc'>카드를 눌러서 뒤집어 보세요! </p>
      <section className='goal-container'>
        <FilpContainer className='ratio-container' onClick={handleCardFlip} $flip={flip}>
          <GoalCard className='absolute-container' ref={goalRef} $imgUrl={backCardUrl[getAssetUrl(fortune || '')]}>
            <h2 className='sub-title-1-eb c-bk title'>{name}님의 올해 목표</h2>
            <ul>
              {goalList?.map((goal) => (
                <Goal className='body-txt-1 c-gy-900' key={goal.id} $fortuneColor={getFortuneColor(fortune || '')}>
                  {goal.content}
                </Goal>
              ))}
            </ul>
          </GoalCard>
          <div className='illust-container' ref={kkachiRef}>
            <img
              src={frontCardUrl[getAssetUrl(fortune || '')].url}
              alt={frontCardUrl[getAssetUrl(fortune || '')].alt}
              className='front-card'
            />
          </div>
        </FilpContainer>
      </section>
      <section className='sns-container'>
        <div className='btn-box'>
          <Share downloadImg={downloadImg} />
        </div>
        <p className='body-txt-2 c-gy-500'>
          이메일은 <b className='sub-title-2'>2023년 6월 30일</b>에 보내드려요
        </p>
        <p className='body-txt-2 c-gy-500'>버그제보/문의 10004team@gmail.com</p>
      </section>
      <p className='btn-txt-12 c-bk link' onClick={goMain}>
        처음으로 돌아가기
      </p>
    </ResultContainer>
  );
}

const GoalCard = styled.div`
  background: ${({ $imgUrl }: { $imgUrl: string }) => `center/100% no-repeat url(${$imgUrl})`};
`;

const FilpContainer = styled.div`
  transform: ${({ $flip }: { $flip: boolean }) => ($flip ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`;

const Goal = styled.li<KkachiColorProps>`
  border-bottom: 1px solid ${({ theme, $fortuneColor }) => theme.colors[$fortuneColor]};
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .desc {
    margin-bottom: 8px;
  }

  .goal-container {
    width: 100%;
    max-width: 335px;
    max-height: 480px;
    margin-bottom: 16px;
    perspective: 1000px;

    ${FilpContainer} {
      position: relative;
      width: 100%;
      padding-top: 143%;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      cursor: pointer;

      .illust-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 1px solid ${({ theme }) => theme.colors.border};
        background-color: #fff;
        backface-visibility: hidden;
        transform: rotateY(180deg);

        .front-card {
          width: 100%;
        }
      }

      ${GoalCard} {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 56px 40px 30px 40px;
        border: 1px solid ${({ theme }) => theme.colors.border};
        background-color: #fff;
        backface-visibility: hidden;

        @media screen and (min-width: 315px) and (max-width: 370px) {
          padding: 44.8px 32px 24px 32px;
        }
        @media screen and (max-width: 315px) {
          padding: 28px 20px 15px 20px;
        }

        .title {
          margin-bottom: 28px;
          text-align: center;

          @media screen and (min-width: 315px) and (max-width: 370px) {
            margin-bottom: 22.4px;
          }
          @media screen and (max-width: 315px) {
            margin-bottom: 14px;
          }
        }

        ${Goal} {
          padding: 20px 0;

          @media screen and (min-width: 300px) and (max-width: 370px) {
            padding: 16px 0;
          }
          @media screen and (max-width: 300px) {
            padding: 10px 0;
            font-size: 10px;
          }

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }

  .sns-container {
    width: 100%;
    max-width: 335px;

    margin-bottom: 23px;
    text-align: center;

    @media screen and (max-height: 715px) {
      margin-bottom: 13px;
    }

    p:first-child {
      margin-bottom: 2px;
    }

    .btn-box {
      margin-bottom: 16px;
    }
  }

  .link {
    padding: 14px 24px;
    cursor: pointer;

    &:active {
      color: ${({ theme }) => theme.colors.p_mid};
    }

    @media screen and (max-height: 715px) {
      padding: 5px 24px;
    }

    @media screen and (min-height: 800px) {
      position: fixed;
      bottom: 44px;
      padding: 14px 24px;
    }
  }
`;

export default Result;
