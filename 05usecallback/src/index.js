import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {SignInOne} from './components/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <SignInOne />
    </>
);
