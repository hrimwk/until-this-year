import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ProgressiveImage from 'react-progressive-graceful-image';
import styled from 'styled-components';

import Share from '../components/result/Share';
import { htmlToJpeg, saveKkachiImg } from '../assets/utils/result/saveImg';
import getAssetUrl from '../assets/utils/result/getAssetsUrl';
import { getFortuneColor, KkachiColorProps } from '../assets/utils/write/getFortuneColor';
import { fortuneModalIdState, goalListState, nameState } from '../../atom';

function Result() {
  const name = useRecoilValue(nameState);
  const goalList = useRecoilValue(goalListState);
  const FLIST = [
    {
      alt: 'love',
      url: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320353/kkachi-admin/x8ehy8kur4sunabwwfcw.jpg',
    },
    {
      alt: 'money',
      url: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320353/kkachi-admin/jmrasep5ubgegzgicsvg.jpg',
    },
    {
      alt: 'relationship',
      url: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320353/kkachi-admin/vv4oz0ed5vkg8ducsafw.jpg',
    },
    {
      alt: 'ego',
      url: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320353/kkachi-admin/jjh5uugt0rpckr0n9dsy.jpg',
    },
    {
      alt: 'health',
      url: 'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320353/kkachi-admin/ed6ssirkcy6h7pn5joi7.jpg',
    },
  ];
  const FLIST_LOW = [
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/vexj47vx324jzy6mup92.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612157/kkachi-admin/kqzfgrx5ismajjm0dmcq.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/e8w9ovadjgei9zcrscbz.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/nexoa00lduobiwdykluo.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612155/kkachi-admin/tmuedofljlbwwjoji7ad.jpg',
  ];
  const BLIST = [
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320294/kkachi-admin/nthcqvm4pyeskiirg0mw.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320294/kkachi-admin/lwhtxkmfkhnj7vijacoe.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320294/kkachi-admin/oqvga0u7n3ebpxwymedb.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320294/kkachi-admin/rlun3vp514h7svevhjtg.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675320294/kkachi-admin/wsi5deitz0u6qsmme1z5.jpg',
  ];
  const BLIST_LOW = [
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612157/kkachi-admin/juglf0fejdpdbytbfbwg.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612157/kkachi-admin/atxbyixmj2xrarpigvnd.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/y17jmhwnij5xsnzd6zov.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/nnc7ztgwjkifjbgvqkov.jpg',
    'https://res.cloudinary.com/dsm9617cz/image/upload/v1675612156/kkachi-admin/sorlmgye0rfjbssnuf2q.jpg',
  ];

  const goalRef = useRef<HTMLDivElement>(null);
  const navigator = useNavigate();
  const [flip, setFlip] = useState(false);
  const modalId = useRecoilValue(fortuneModalIdState);

  const downloadImg = () => {
    if (goalRef.current === null) return;
    flip ? htmlToJpeg(goalRef) : saveKkachiImg(FLIST[getAssetUrl(modalId || '')].url);
  };

  const goMain = () => {
    navigator('/');
    location.reload();
  };

  const handleCardFlip = () => setFlip((prev) => !prev);

  return (
    <ResultContainer className='container'>
      <p className='sub-title-1 c-gy-500 desc'>????????? ????????? ????????? ?????????! </p>
      <p className='c-gy-500 body-txt-2 info'>
        (??? ????????? ?????? ???, <span className='sub-title-2'>???????????? ??????</span>?????? ???????????????.)
      </p>
      <section className='goal-container'>
        <FilpContainer className='ratio-container' onClick={handleCardFlip} $flip={flip}>
          <ProgressiveImage src={BLIST[getAssetUrl(modalId || '')]} placeholder={BLIST_LOW[getAssetUrl(modalId || '')]}>
            {(src) => (
              <GoalCard className='absolute-container' ref={goalRef} $imgUrl={src}>
                <h2 className='sub-title-1-eb c-bk title'>{name}?????? ?????? ??????</h2>
                <ul>
                  {goalList?.map((goal) => (
                    <Goal className='body-txt-1 c-gy-900' key={goal.id} $fortuneColor={getFortuneColor(modalId || '')}>
                      {goal.content}
                    </Goal>
                  ))}
                </ul>
              </GoalCard>
            )}
          </ProgressiveImage>
          <div className='illust-container'>
            <ProgressiveImage
              src={FLIST[getAssetUrl(modalId || '')].url}
              placeholder={FLIST_LOW[getAssetUrl(modalId || '')]}>
              {(src) => <img src={src} alt={FLIST[getAssetUrl(modalId || '')].alt} className='front-card' />}
            </ProgressiveImage>
          </div>
        </FilpContainer>
      </section>
      <section className='sns-container'>
        <div className='btn-box'>
          <Share downloadImg={downloadImg} />
        </div>
        <p className='c-bk body-txt-2 instagram'>@this_year_kkachi</p>
        <p className='body-txt-2 c-gy-500'>(??? Safari??? ?????????????????? ????????? ????????? ????????? ?????? ??? ????????? ?????????!)</p>
        <p className='body-txt-2 c-gy-500'>????????????/?????? 10004team@gmail.com</p>
      </section>
      <p className='btn-txt-12 c-bk link' onClick={goMain}>
        ???????????? ????????????
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
  border-bottom: 2px solid ${({ theme, $fortuneColor }) => theme.colors[$fortuneColor]};
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .desc {
    margin-bottom: 2px;
  }
  .info {
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
        padding: 56px 40px 54px 40px;
        border: 1px solid ${({ theme }) => theme.colors.border};
        background-color: #fff;
        backface-visibility: hidden;

        @media screen and (min-width: 300px) and (max-width: 350px) {
          padding: 44.8px 32px 24px 32px;
        }
        @media screen and (max-width: 300px) {
          padding: 33.6px 24px 32.4px 24px;
        }

        .title {
          margin-bottom: 28px;
          text-align: center;

          @media screen and (min-width: 305px) and (max-width: 315px) {
            margin-bottom: 20px;
            font-size: 12px;
            line-height: 18px;
          }
          @media screen and (max-width: 305px) {
            margin-bottom: 14px;
            font-size: 12px;
            line-height: 18px;
          }
        }

        ${Goal} {
          padding: 16px 0;

          @media screen and (min-width: 335px) and (max-width: 365px) {
            padding: 13px 0;
          }
          @media screen and (min-width: 290px) and (max-width: 335px) {
            padding: 11px 0;
          }
          @media screen and (min-width: 291px) and (max-width: 325px) {
            font-size: 11px;
            line-height: 17px;
          }
          @media screen and (max-width: 290px) {
            padding: 10px 0;
            font-size: 10px;
            line-height: 16px;
          }

          &:first-child {
            padding-top: 0;
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
      margin-bottom: 8px;
    }
  }

  .instagram {
    margin-bottom: 6px;
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
