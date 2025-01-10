import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Display1 from './display1';
//import Data1 from './data1';
import Datas from './Datas';
//import States from './States';
import Array from './array';
import Test from './Test';
import Demo from './test2'
import Parent2 from './Parent'
import Ace from './List_Iteration'
import Form1 from './Validate_sample'
import Validate from './Validate'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Validate/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
