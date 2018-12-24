import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/ui.scss'
import { App } from './components/App'

window.React = React;

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
module.hot.accept();
