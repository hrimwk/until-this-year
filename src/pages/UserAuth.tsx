import axios from 'axios';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBack from '../components/common/ArrowBack';
import UserModal from '../components/user/UserModal';

interface UserAuthProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

function UserAuth({ name, setName, email, setEmail }: UserAuthProps) {
  const [consentCheck, setConsentCheck] = useState(true);
  const [modal, setModal] = useState(false);
  const navigator = useNavigate();

  const writeName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) {
      setName((prev) => prev);
      return;
    }
    setName(e.target.value);
  };
  const writeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const validEmail = (email: string) => {
    const emailFormat =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailFormat.test(email);
  };

  const handleChecked = () => setConsentCheck((prev) => !prev);

  const handleGoNextStep = () => {
    // axios
    //   .get(`http://localhost:8000/?email=${email}`)
    //   .then((res) => {
    //     if (!res) {
    //       navigator('/fortune');
    //     } else {
    setModal(true);
    //   }
    // })
    // .catch((err) => {
    //   alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
    //   console.log(err);
    // });
  };

  return (
    <UserAuthtContainer className='container'>
      {modal && <UserModal setModal={setModal} />}
      <ArrowBack />
      <div className='content-container'>
        <h2 className='c-bk title-1 title'>올해까치</h2>
        <form className='form-container' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            className='text-input nickname-input'
            placeholder='닉네임 (8자까지)'
            value={name}
            onChange={writeName}
            required
          />
          <input
            type='text'
            className={email.length == 0 || validEmail(email) ? 'text-input' : 'text-input border-red'}
            placeholder='이메일'
            value={email}
            onChange={writeEmail}
            required
          />
          {email.length > 0 && !validEmail(email) && <p className='body-txt-2'>이메일 형식이 맞지 않습니다.</p>}
        </form>
        <section className='checkbox-container'>
          <div className='checkbox-box'>
            <div className='checkbox'>
              <input id='checked' type='checkbox' readOnly checked={consentCheck} onClick={handleChecked} />
              <span className={consentCheck ? 'fake-checkbox full' : 'fake-checkbox empty'} onClick={handleChecked}>
                {consentCheck && <span className='checkImg' />}
              </span>
              <label htmlFor='checked' className='sub-title-1'>
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
        </section>
        <section className='terms-container'>
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
          <section className='button-area'>
            <button
              className={validEmail(email) && name ? 'btn active btn-txt-eb c-wt' : 'btn btn-txt-eb c-gy-500'}
              onClick={handleGoNextStep}>
              새해 복 받으러 가기
            </button>
          </section>
        </section>
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
      margin-top: 56px;
    }

    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 400px;
      margin: 0 20px;

      .text-input {
        width: 100%;
        margin-bottom: 24px;
        padding: 14px 20px;

        &:last-of-type {
          margin-bottom: 8px;
        }
      }

      .nickname-input {
        &:focus {
          border: 1px solid ${({ theme }) => theme.colors.p_light};
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
      width: 100%;
      max-width: 410px;
      margin: 0 18px;

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
            display: none;
          }

          .fake-checkbox {
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 9px;

            .checkImg {
              display: inline-block;
              width: inherit;
              height: inherit;
              background: center/70% no-repeat url('../src/assets/images/check.png');
            }
          }

          .full {
            background-color: ${({ theme }) => theme.colors.p_light};
          }

          .empty {
            border: 1px solid ${({ theme }) => theme.colors.border};
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
      margin: 0 4px 60px 4px;
      text-align: center;

      .terms-list {
        margin-bottom: 24px;

        .term {
          &:first-child {
            margin-bottom: 8px;
          }
        }
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
    }

    .active {
      background-color: ${({ theme }) => theme.colors.p_dark};
    }
  }
`;

export default UserAuth;
