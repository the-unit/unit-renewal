import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../Pages/index';
import Aboutus from '../Pages/aboutus';
import Sponsors from '../Pages/sponsors';
import Partners from '../Pages/partners';
import Contact from '../Pages/contact';

export default function () {
  return (
    <Switch>
      <Route path="/aboutus">
        <Aboutus />
      </Route>
      <Route path="/sponsors">
        <Sponsors />
      </Route>
      <Route path="/partners">
        <Partners />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}
