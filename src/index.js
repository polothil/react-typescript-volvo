import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleProvider>
        <ThemePicker variant='light'>
          <App />
        </ThemePicker>
      </StyleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
