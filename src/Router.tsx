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
      <ThemeProvider theme={theme}></ThemeProvider>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/user" element={<UserAuth />}></Route>
        <Route path="/fortune" element={<FortuneList />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
