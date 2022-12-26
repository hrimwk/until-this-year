import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import usePreventLeave from '../assets/utils/result/usePreventLeave';
import Share from '../components/result/Share';

interface ResultProps {
  name: string;
  goalList: { id: number; content: string }[];
}

function Result({ name, goalList }: ResultProps) {
  useEffect(() => {
    enablePrevent();

    return () => disablePrevent();
  }, []);
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <ResultContainer className='container'>
      <p className='sub-title-1 c-gy-500 desc'>카드를 뒤집어보세요!</p>
      <section className='goal-container'>
        <div className='ratio-container'>
          <div className='absolute-container'>
            <h2 className='sub-title-1-eb c-bk title'>{name}님의 올해 목표</h2>
            <ul>
              {goalList?.map((goal) => (
                <li className='body-txt-1 c-gy-900 goal' key={goal.id}>
                  {goal.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className='sns-container'>
        <Share />
        <p className='body-txt-2 c-gy-500'>
          이메일은 <b className='sub-title-2'>2023년 6월 30일</b>에 보내드려요
        </p>
        <p className='body-txt-2 c-gy-500'>버그제보/문의 email@email.com</p>
      </section>
      <Link to='/' className='btn-txt-12 c-bk link'>
        처음으로 돌아가기
      </Link>
    </ResultContainer>
  );
}
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

    .ratio-container {
      position: relative;
      width: 100%;
      padding-top: 143%;

      .absolute-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 56px 40px 30px 40px;
        border: 1px solid ${({ theme }) => theme.colors.border};

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

        .goal {
          padding: 20px 0;
          border-bottom: 1px solid ${({ theme }) => theme.colors.border};

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
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      padding: 0 4px;

      .sns-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.p_mid};
      }
    }
  }

  .link {
    padding: 14px 24px;

    &:active {
      color: ${({ theme }) => theme.colors.p_mid};
    }

    @media screen and (max-height: 715px) {
      padding: 5px 24px;
    }
  }
`;

export default Result;
