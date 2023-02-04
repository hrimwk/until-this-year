import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>,
);
