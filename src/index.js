import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Covid from './Covid.js';
import{BrowserRouter} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
<BrowserRouter>
<App /><Covid/>
</BrowserRouter>,document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
