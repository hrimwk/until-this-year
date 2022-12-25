import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle';
import theme from './assets/styles/theme';

import Intro from './pages/Intro';
import UserAuth from './pages/UserAuth';
import FortuneList from './pages/FortuneList';
import Write from './pages/Write';
import Result from './pages/Result';
import { useState } from 'react';

type goal = { id: number; content: string };

function App() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [fortune, setfortune] = useState<string>('');
  const [goalList, setGoalList] = useState<goal[]>([{ id: 1, content: '' }]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/user' element={<UserAuth name={name} setName={setName} email={email} setEmail={setEmail} />} />
          <Route path='/fortune' element={<FortuneList fortune={fortune} setfortune={setfortune} />} />
          <Route path='/write' element={<Write goalList={goalList} setGoalList={setGoalList} />} />
          <Route path='/result' element={<Result name={name} goalList={goalList} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
