import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
      <Route path='/moin' component={() => {
        window.location.href = 'https://www.canva.com/design/DAD_A2X2iXY/gXB_B9GOFN_HVgS8KQYfyw/view#1';
        return null;
      }}/>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}
