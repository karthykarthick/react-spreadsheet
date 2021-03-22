import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/login'
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
   <Router>
    <Route path="/" exact render={ () =><Login />} />
    <Route path="/serve" exact render={ () =><App />} />

  </Router>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
