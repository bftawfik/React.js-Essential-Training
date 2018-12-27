import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/add-day" component={App}/>
      <Route exact path="/list-days" component={App}/>
      <Route exact path="/list-days/:filter" component={App}/>
      <Route exact path="*" component={Whoops404}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
