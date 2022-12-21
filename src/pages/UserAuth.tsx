import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import ArrowBack from '../components/common/ArrowBack';

function UserAuth() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const writeName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) {
      setNameValue((prev) => prev);
      return;
    }
    setNameValue(e.target.value);
  };
  const writeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value);

  const validEmail = (email: string) => {
    const emailFormat =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return email === '' || emailFormat.test(email);
  };

  const handleGoNextStep = () => {};

  return (
    <UserAuthtContainer className='container'>
      <ArrowBack />
      <div className='content-container'>
        <h2 className='c-bk title-1 title'>올해까치</h2>
        <form className='form-container' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            className='text-input'
            placeholder='닉네임 (8자까지)'
            value={nameValue}
            onChange={writeName}
            required
          />
          <input
            type='text'
            className={validEmail(emailValue) ? 'text-input' : 'text-input border-red'}
            placeholder='이메일'
            value={emailValue}
            onChange={writeEmail}
            required
          />
          {!validEmail(emailValue) && <p className='body-txt-2'>이메일 형식이 맞지 않습니다.</p>}
        </form>
        <div className='checkbox-container'>
          <div className='checkbox-box'>
            <div className='checkbox'>
              <input type='checkbox' />
              <label htmlFor='checkbox' className='sub-title-1'>
                6개월 뒤 메일 수신 동의하기
              </label>
            </div>
            <p className='c-gy-500 body-txt-1'>수신 동의 여부와 상관없이 작성하신 내용은 모두 수집됩니다.</p>
          </div>
          <div className='advice-box body-txt-1 c-gy-900'>
            올해 세웠던 목표를 돌아보면서
            <br />
            알찬 일년을 다시 한번 다짐해보는 기회가 될거예요.
          </div>
        </div>
        <div className='terms-container'>
          <ul className='terms-list'>
            <li className='term'>
              <p className='c-gy-500 sub-title-2'>개인정보의 보유 및 이용기간</p>
              <p className='c-gy-500 body-txt-2'>
                이메일 발송/공유 서비스를 위해 아래와 같은 개인정보를 수집하고 있습니다.
                <br />
                수집항목 : 닉네임, 이메일
              </p>
            </li>
            <li className='term'>
              <p className='c-gy-500 sub-title-2'>수집하는 개인정보 항목 및 이용목적</p>
              <p className='c-gy-500 body-txt-2'>
                개인정보 수집 및 이용목적이 달성된 후 해당 정보를 지체 없이 파기합니다.
              </p>
            </li>
          </ul>
          <button
            onClick={handleGoNextStep}
            className={validEmail(emailValue) && nameValue ? 'btn active c-wt' : 'btn c-gy-500'}>
            새해 복 받으러 가기
          </button>
        </div>
      </div>
    </UserAuthtContainer>
  );
}
const UserAuthtContainer = styled.div`
  width: 100%;
  height: 100vh;

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .title {
      margin-top: 120px;
    }

    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;

      .text-input {
        width: 100%;
        margin-bottom: 24px;
        padding: 14px 20px;

        &:last-of-type {
          margin-bottom: 8px;
        }
      }

      .border-red {
        border: 1px solid #ff1c1c;
      }

      p {
        align-self: flex-start;
        margin-left: 20px;
        color: #ff1c1c;
      }
    }
    .checkbox-container {
      .checkbox-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;

        .checkbox {
          display: flex;
          justify-content: center;

          input {
            margin-right: 9px;
          }
        }
      }

      .advice-box {
        position: relative;
        width: 100%;
        padding: 16px 20px;
        text-align: center;
        border-radius: 6px;
        background-color: ${({ theme }) => theme.colors.p_light};

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 12px solid transparent;
          border-bottom-color: ${({ theme }) => theme.colors.p_light};
          border-top: 0;
          margin-left: -12px;
          margin-top: -12px;
        }
      }
    }

    .terms-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;

      .terms-list {
        margin-bottom: 24px;

        .term {
          &:first-child {
            margin-bottom: 8px;
          }
        }
      }

      .btn {
        display: block;
        width: 90%;
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
  }
`;

export default UserAuth;
