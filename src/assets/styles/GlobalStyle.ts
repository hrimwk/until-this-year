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
    };
    ::-webkit-scrollbar{
        display: none;
    }
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    .container{
        margin: 0 auto;
        padding: 10px;
        min-height: 100vh;
        max-width: 540px;

    }
`;

export default GlobalStyle;
