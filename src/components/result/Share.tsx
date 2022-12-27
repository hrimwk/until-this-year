import { useEffect } from 'react';
import styled from 'styled-components';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import kakao from '../../assets/images/kakao.png';
import url from '../../assets/images/url.png';
import download from '../../assets/images/download.png';

declare global {
  interface Window {
    Kakao: any;
  }
}
function Share({ downloadImg }: { downloadImg: () => void }) {
  const currentUrl = window.location.href;
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_REACT_APP_KAKAO_KEY);
      }
    }
  }, []);
  const shareKakao = () => {
    window.Kakao.Share.sendScrap({
      requestUrl: 'http://172.30.1.20:5173',
      templateId: 87708,
    });
  };

  return (
    <ShareContainer>
      <div className='img-wrap' onClick={shareKakao}>
        <img src={kakao} alt='kakao' />
      </div>
      <FacebookShareButton url={currentUrl}>
        <div className='img-wrap'>
          <img src={facebook} alt='facebook' />
        </div>
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl}>
        <div className='img-wrap'>
          <img src={twitter} alt='twitter' />
        </div>
      </TwitterShareButton>
      <CopyToClipboard text={currentUrl} onCopy={() => alert('클립보드에 복사되었습니다.')}>
        <div className='img-wrap'>
          <img src={url} alt='url' />
        </div>
      </CopyToClipboard>
      <div className='img-wrap'>
        <img src={download} alt='download' />
      </div>
    </ShareContainer>
  );
}
const ShareContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .img-wrap {
    width: 44px;
    cursor: pointer;
  }
`;
export default Share;
