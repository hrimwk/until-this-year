import { useRecoilValue } from 'recoil';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle';
import theme from './assets/styles/theme';

import Intro from './pages/Intro';
import UserAuth from './pages/UserAuth';
import FortuneList from './pages/FortuneList';
import Write from './pages/Write';
import Result from './pages/Result';
import { emailState } from '../atom';

function App() {
  const email = useRecoilValue(emailState);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/user' element={<UserAuth />} />
          <Route path='/fortune' element={email ? <FortuneList /> : <Navigate to='/' />} />
          <Route path='/write' element={email ? <Write /> : <Navigate to='/' />} />
          <Route path='/result' element={email ? <Result /> : <Navigate to='/' />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
