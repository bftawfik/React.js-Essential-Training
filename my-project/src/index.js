import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'

import { Switch, BrowserRouter, Route, Link, hashHistory } from "react-router-dom";


window.React = React;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="*" component={Whoops404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
module.hot.accept();
