import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import { Admin } from './pages/Admin/Admin';
import Discord from './pages/Discord/Discord';
import './index.css'

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<h1>404</h1>} />
        <Route path='/' element={<Discord />} />
        <Route path='/add' element={<Add />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);