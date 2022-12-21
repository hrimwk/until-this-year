import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
    @font-face { 
        font-family: 'SANJUGotgam'; 
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/SANJUGotgam.woff') format('woff'); 
        font-weight: normal; 
        font-style: normal; 
    }
    @font-face { 
        font-family: 'NanumSquareNeo-Variable'; 
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
        font-weight: normal; 
        font-style: normal; 
    }
    @font-face { 
        font-family: 'LeeSeoyun'; 
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff'); 
        font-weight: normal; 
        font-style: normal; 
    }
    box-sizing: border-box;  
    };  
    body{
        padding: 0;
        margin: 0;
        -ms-overflow-style: none;
    }
    ::-webkit-scrollbar{
        display: none;
    }
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    }
    img{
        width:100%;
    }
    input{
        display: flex;
        padding-left: 10px;
        border:1px solid #EEEEEE;
        border-radius: 4px;
        outline: none;
    }
    .container{
        margin: 0 auto;
        padding: 24px 20px;
        min-height: 100vh;
        max-width: 540px; 

    }
    .c-bk{
        color:#000000;
    }
    .c-wt{
        color:#ffffff;
    }
    .c-gy-900{
        color:#212121;
    }
    .c-gy-700{
        color:#616161;
    }
    .c-gy-500{
        color:#9E9E9E;
    }
    .title-1{
        font-family: 'SANJUGotgam';
        font-size: 24px;
        line-height: 36px;
    }
    .title-2{
        font-family: 'SANJUGotgam';
        font-size: 18px;
        line-height: 28px;
    }
    .sub-title-1-eb{
        font-family: 'NanumSquareNeo-Variable';
        font-weight: 800;
        font-size: 14px;
        line-height: 22px;
    }
    .sub-title-1{
        font-family: 'NanumSquareNeo-Variable';
        font-size: 14px;
        line-height: 22px;
    }
    .sub-title-2{
        font-family: 'NanumSquareNeo-Variable';
        font-weight: 800;
        font-size: 10x;
        line-height: 16px;
    }
    .body-txt-1{
        font-family: 'NanumSquareNeo-Variable';
        font-size: 12px;
        line-height: 18px;
    }
    .body-txt-2{
        font-family: 'NanumSquareNeo-Variable';
        font-size: 10px;
        line-height: 16px;
    }
`;

export default GlobalStyle;
