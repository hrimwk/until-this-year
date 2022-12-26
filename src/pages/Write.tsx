import { useState, MouseEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { DefaultTheme } from 'styled-components';
import ArrowBack from '../components/common/ArrowBack';
import WriteSwiper from '../components/write/WriteSwiper';

type goalList = { id: number; content: string; focus: boolean }[];

interface WriteProps {
  name: string;
  email: string;
  fortune: string;
  goalList: goalList;
  setGoalList: React.Dispatch<React.SetStateAction<goalList>>;
  consentCheck: boolean;
}

function Write({ name, email, fortune, goalList, setGoalList, consentCheck }: WriteProps) {
  const [unqId, setUnqId] = useState(2);
  const navigator = useNavigate();

  const handleAddGoalList = () => {
    if (goalList.length >= 5) return;
    setGoalList((prev) => [...prev, { id: unqId, content: '', focus: false }]);
    setUnqId((prev) => prev + 1);
  };

  const handleRemoveGoalList = (e: MouseEvent<HTMLSpanElement>) => {
    const targetId = e.currentTarget.id.split('-')[1];
    setGoalList((prev) => {
      const newList = [...prev].filter((goal) => goal.id !== Number(targetId));
      return newList;
    });
  };

  const handleWriteGoal = (e: ChangeEvent<HTMLInputElement>) => {
    const targetId = e.target.id.split('-')[1];
    const newList = [...goalList].map((goal) => {
      if (goal.id === Number(targetId)) {
        return e.target.value.length < 31 ? { ...goal, content: e.target.value } : { ...goal };
      } else {
        return { ...goal };
      }
    });
    setGoalList(newList);
  };

  const getFotuneColor = (fortune: string) => {
    switch (fortune) {
      case 'love':
        return 'luck_p';
      case 'money':
        return 'luck_g';
      case 'relationship':
        return 'luck_bl';
      case 'ego':
        return 'luck_r';
      case 'health':
        return 'luck_gr';
      default:
        return 'luck_bl';
    }
  };

  const handleBorderColor = (e: ChangeEvent<HTMLInputElement>) => {
    const targetId = e.target.id.split('-')[1];
    const newList = [...goalList].map((goal) =>
      goal.id === Number(targetId) ? { ...goal, focus: e.type === 'focus' ? true : false } : { ...goal },
    );
    setGoalList(newList);
  };

  const handleSubmit = () => {
    // axios
    //   .post('http://localhost:8080/users/registration', {
    //     nickname: name,
    //     email,
    //     opt_in: consentCheck,
    //     goals: goalList.filter((goal) => !!goal.content).map((goalObj) => goalObj.content),
    //   })
    //   .then((res) => {
    setGoalList((prev) => [...prev].filter((goal) => !!goal.content));
    //   navigator('/result');
    // })
    // .catch((err) => {
    //   console.log(err);
    //   alert('네트워크 에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
    // });
  };

  return (
    <WriteContainer className='container'>
      <ArrowBack />
      <div className='wrap-container'>
        <section className='kkachi-container'>
          <h1 className='title-2 title'>까치와 올해 목표를 적어봐요</h1>
          <div className='kkachi-face' />
          <KkachiTalk $fortuneColor={getFotuneColor(fortune)}>
            <WriteSwiper fortune={fortune} />
          </KkachiTalk>
        </section>
        <section className='input-container'>
          <ul>
            {goalList.map((goal, i) => (
              <li className={goal.focus ? 'goal-box focus' : 'goal-box'} key={goal.id}>
                <input
                  value={goal.content}
                  id={'input-' + goal.id}
                  onChange={handleWriteGoal}
                  onFocus={handleBorderColor}
                  onBlur={handleBorderColor}
                  placeholder='목표를 적어보세요. (글자 수 제한 30자)'></input>
                {i !== 0 && <span className='exit' id={'span-' + goal.id} onClick={handleRemoveGoalList}></span>}
              </li>
            ))}
          </ul>
          {goalList.length < 5 && (
            <button className='add-btn' onClick={handleAddGoalList}>
              <span className='plus' />
            </button>
          )}
        </section>
        <section className='button-area'>
          <button
            className={!!goalList[0].content ? 'btn active btn-txt-eb c-wt' : 'btn btn-txt-eb c-gy-500'}
            onClick={handleSubmit}
            disabled={!!goalList[0].content ? false : true}>
            완성하기
          </button>
        </section>
      </div>
    </WriteContainer>
  );
}

type KkachiTalkProps = {
  theme: DefaultTheme;
  $fortuneColor: string;
};

const KkachiTalk = styled.div<KkachiTalkProps>`
  position: relative;
  width: 80%;
  margin: 0 20px 24px 20px;
  padding: 12px 20px 8px 20px;
  background-color: ${({ theme, $fortuneColor }) => theme.colors[$fortuneColor]};
  border-radius: 6px;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: ${({ theme, $fortuneColor }) => theme.colors[$fortuneColor]};
    border-top: 0;
    margin-left: -12px;
    margin-top: -12px;
  }

  .swiper-wrapper {
    margin-bottom: 3px;
  }

  .swiper-pagination {
    position: relative;
    top: 0;
    bottom: 0;

    .swiper-pagination-bullet {
      width: 3px;
      height: 3px;
      margin-left: 0;
      margin-right: 4px;
      background-color: #fff;
      opacity: 100%;

      &:last-of-type {
        margin-right: 0;
      }
    }
    .swiper-pagination-bullet-active {
      width: 3px;
      height: 3px;
      background-color: #000;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  h5 {
    margin-bottom: 4px;
    font-weight: 800;
  }
`;

const WriteContainer = styled.div`
  .wrap-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .kkachi-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        margin-top: 80px;
        margin-bottom: 10px;
      }

      .kkachi-face {
        width: 84px;
        height: 84px;
        margin-bottom: 24px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.border};
      }
    }

    .input-container {
      width: 100%;

      .goal-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 16px;
        padding: 0 20px;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 6px;
        transition: 0.2s;

        &:last-child {
          margin-bottom: none;
        }

        input {
          width: 90%;
          padding: 19px 0;
          border: none;
        }

        .exit {
          display: inline-block;
          width: 11px;
          height: 11px;
          margin-left: 19px;
          background: center/130% no-repeat url('../src/assets/images/input_delete.png');
        }
      }

      .focus {
        border: 1px solid ${({ theme }) => theme.colors.p_light};
      }

      .add-btn {
        width: 100%;
        margin-bottom: 100px;
        padding: 19px 20px;
        border: none;
        border-radius: 6px;
        background-color: #c5d7e566;

        .plus {
          display: inline-block;
          width: 14px;
          height: 14px;
          background: no-repeat url('../src/assets/images/plus.svg');
        }
      }
    }

    .button-area {
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: 540px;
      padding: 20px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 88%,
        rgba(255, 255, 255, 0.6) 100%
      );

      .btn {
        display: block;
        width: 100%;
        padding: 18px 38px;
        background: #f5f5f5;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        cursor: not-allowed;
        transition: 0.2s;
      }

      .active {
        background-color: ${({ theme }) => theme.colors.p_dark};
        cursor: pointer;

        &:active {
          background-color: ${({ theme }) => theme.colors.p_light};
        }
      }
    }
  }
`;

export default Write;
