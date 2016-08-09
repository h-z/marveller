import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

import Marveller from './libs/Marveller';

var key = process.env.REACT_APP_MARVEL_API_KEY;

ReactDOM.render(
  <App marveller={new Marveller(key)} />,
  document.getElementById('root')
);
