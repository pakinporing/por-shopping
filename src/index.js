import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataProductContextProvider from './contexts/DataProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <DataProductContextProvider>
    <App />
  </DataProductContextProvider>
  // </React.StrictMode>
);
