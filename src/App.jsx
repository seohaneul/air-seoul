import React from 'react'
import GlobalStyle from './asset/page/GlobalStyle';
import Main from './asset/page/Main';
import ChartPage from './asset/page/ChartPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='Chart' element={<ChartPage />} />
      </Routes>
    </BrowserRouter>
  )
}
