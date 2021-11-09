import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './MyComponets/Templates/Routers';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Routers/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
