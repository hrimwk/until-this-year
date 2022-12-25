import { useState, MouseEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import ArrowBack from '../components/common/ArrowBack';

type goalList = { id: number; content: string }[];

interface WriteProps {
  goalList: goalList;
  setGoalList: React.Dispatch<React.SetStateAction<goalList>>;
}

function Write({ goalList, setGoalList }: WriteProps) {
  const [unqId, setUnqId] = useState(2);

  const handleAddGoalList = () => {
    if (goalList.length >= 5) return;
    setGoalList((prev) => [...prev, { id: unqId, content: '' }]);
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
    setGoalList((prev) => {
      const newList = [...prev].map((goal) =>
        goal.id === Number(targetId) ? { id: goal.id, content: e.target.value } : { ...goal },
      );
      return newList;
    });
  };

  const handleSubmit = () => {};

  return (
    <WriteContainer className='container'>
      <ArrowBack />
      <section className='kkachi-container'>
        <h1 className='title-2 title'>까치와 올해 목표를 적어봐요</h1>
        <div className='kkachi-face' />
        <div className='kkachi-talk'>
          <h5 className='sub-title-2'>까치의한마디</h5>
          <ul>
            <li className='body-txt-1'>기분이 태도가 되지 않기 어때?</li>
          </ul>
        </div>
      </section>
      <section>
        <ul>
          {goalList.map((goal) => (
            <li className='goal-box' key={goal.id}>
              <input
                value={goal.content}
                id={'input-' + goal.id}
                onChange={handleWriteGoal}
                placeholder='목표를 적어보세요. (글자 수 제한 30자)'></input>
              <span className='exit' id={'span-' + goal.id} onClick={handleRemoveGoalList}></span>
            </li>
          ))}
        </ul>
        {goalList.length < 5 && (
          <button className='add-btn' onClick={handleAddGoalList}>
            +
          </button>
        )}
      </section>
      <section className='button-area'>
        <button
          className={!!goalList[0].content ? 'btn active btn-txt-eb c-wt' : 'btn btn-txt-eb c-gy-500'}
          onClick={handleSubmit}>
          완성하기
        </button>
      </section>
    </WriteContainer>
  );
}
const WriteContainer = styled.div`
  width: 100%;

  .kkachi-container {
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

    .kkachi-talk {
      position: relative;
      width: 80%;
      margin: 0 20px 24px 20px;
      padding: 12px 20px 8px 20px;
      background-color: ${({ theme }) => theme.colors.luck_g};
      border-radius: 6px;
      text-align: center;

      h5 {
        margin-bottom: 4px;
        font-weight: 800;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: ${({ theme }) => theme.colors.luck_g};
        border-top: 0;
        margin-left: -12px;
        margin-top: -12px;
      }
    }
  }

  .goal-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
    padding: 19px 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;

    &:last-child {
      margin-bottom: none;
    }

    input {
      width: 90%;
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

  .add-btn {
    width: 100%;
    margin-bottom: 100px;
    padding: 19px 20px;
    border: none;
    border-radius: 6px;
    background-color: #c5d7e566;
  }

  .button-area {
    position: fixed;
    left: 0;
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
    }

    .active {
      background-color: ${({ theme }) => theme.colors.p_dark};
    }
  }
`;

export default Write;
