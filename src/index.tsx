import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fontAwesomeLibrary'; // Import the fontAwesomeLibrary to register icons

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);