import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TopBar from './topBar';
import './Photo.sass';
import Fingerprint from './Fingerprint';
import About from './About';
import FlexButtons from './FlexButton';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import { Rando } from './Rando';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <Switch>
        <Routes>
          <Route path='http://localhost:3000/rando'>
            <Rando />
          </Route>
          <Route path='http://localhost:3000'>
            <TopBar />
            <Fingerprint />
            <About />
            <FlexButtons />
          </Route>
        </Routes>
      </Switch>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
