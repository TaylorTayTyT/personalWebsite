import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TopBar from './topBar';
import Photo from './Photo.js';
import Endpage from './endpage';
import Fingerprint from './Fingerprint';
import Flex from './Flex';
import FlexButtons from './FlexButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopBar />
    <Fingerprint/>
    <FlexButtons/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
