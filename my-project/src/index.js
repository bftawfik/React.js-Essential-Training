import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, } from "react-router-dom";

import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { matchPath } from "react-router";

window.React = React;
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/add-day" component={App}/>
      <Route exact path="/list-days" component={App}/>
      <Route path="/list-days/:filter" component={App}/>
      <Route exact path="*" component={Whoops404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
module.hot.accept();
