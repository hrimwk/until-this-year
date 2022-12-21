import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle';
import theme from './assets/styles/theme';

import Intro from './pages/Intro';
import UserAuth from './pages/UserAuth';
import FortuneList from './pages/FortuneList';
import Write from './pages/Write';
import Result from './pages/Result';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/user' element={<UserAuth />} />
          <Route path='/fortune' element={<FortuneList />} />
          <Route path='/write' element={<Write />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
