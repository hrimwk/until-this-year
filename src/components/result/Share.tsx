import styled from 'styled-components';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import kakao from '../../assets/images/kakao.png';
import url from '../../assets/images/url.png';
import download from '../../assets/images/download.png';
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from 'react-share';

function Share() {
  const currentUrl = window.location.href;
  return (
    <ShareContainer>
      <div className='img-wrap'>
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
      <div className='img-wrap'>
        <img src={url} alt='url' />
      </div>
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
  }
`;
export default Share;
