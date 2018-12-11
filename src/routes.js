import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContainer } from 'modules/App';
import * as Pages from './pages';

export default (
  <Switch>
    <AppContainer>
      <Route path="/" component={() => <div>test</div>} />
      {/* <Switch>
        <Route path="/constructor" component={Pages.User} />
        <Route path="/" component={Pages.Home} />
      </Switch> */}
    </AppContainer>
  </Switch>
);
