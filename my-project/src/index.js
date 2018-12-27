import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import './stylesheets/ui.scss'
import './stylesheets/index.scss'

import Routes from './routes'


window.React = React;
ReactDOM.render(
  <Routes/>,
  document.getElementById('react-container')
);
module.hot.accept();
