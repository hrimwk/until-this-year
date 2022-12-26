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

type goal = { id: number; content: string; focus: boolean };

function App() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [consentCheck, setConsentCheck] = useState(true);
  const [goalList, setGoalList] = useState<goal[]>([{ id: 1, content: '', focus: false }]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route
            path='/user'
            element={
              <UserAuth
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                consentCheck={consentCheck}
                setConsentCheck={setConsentCheck}
              />
            }
          />
          <Route path='/fortune' element={<FortuneList />} />
          <Route
            path='/write'
            element={
              <Write
                name={name}
                email={email}
                goalList={goalList}
                setGoalList={setGoalList}
                consentCheck={consentCheck}
              />
            }
          />
          <Route path='/result' element={<Result name={name} email={email} goalList={goalList} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
