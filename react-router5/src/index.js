import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>可以用于检查 React 的语法错误
  <React.StrictMode>
    {/* 有 <BrowserRouter /> 和 <HashRouter> 两种方式可选 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
