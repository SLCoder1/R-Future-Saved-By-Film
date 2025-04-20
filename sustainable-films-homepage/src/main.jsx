import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';


import Animated from './pages/Animated';
import Dystopian from './pages/Dystopian';
import Documentary from './pages/Documentary';
import Drama from './pages/Drama';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/animated" element={<Animated />} />
        <Route path="/dystopian" element={<Dystopian />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/drama" element={<Drama />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
