import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import themeContext from './themeContext'

ReactDOM.render(
  <div className="container">
  <themeContext.Provider value={'light'}>
  <App/>
  </themeContext.Provider>
  </div>,
  document.getElementById('root')
);


