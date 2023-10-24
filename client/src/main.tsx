import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowerRouter, RouteProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const router = createBrowerRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
