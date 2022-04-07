import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import Discord from './pages/Discord/Discord';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<h1>404</h1>} />
      <Route path='/discord' element={<Discord />} />
      <Route path='/add' element={<Add />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);