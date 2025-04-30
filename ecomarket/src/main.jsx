import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Verifica que este archivo exista si lo estás importando

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);