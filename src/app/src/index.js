import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from'./App.js';
import AllPasswords from './Components/AllPasswords';

/*
  Route Arr => [
    {
      path: string (Url адрес страницы)
      component: React.Component (Компонент, который будет загружаться)
      exact: boolean (будет ли компонент затирать предыдущие по Url компоненты)
    }
  ]
*/

var routeArray = [
    {
      path: "/",
      component: AllPasswords,
      exact: true
    }
]

ReactDOM.render(<App routeArr={routeArray}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
