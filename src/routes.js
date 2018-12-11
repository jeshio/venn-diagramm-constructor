import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContainer } from 'modules/App';
import { BuilderContainer } from 'modules/Builder';
import { StageContainer } from 'modules/Stage';

export default (
  <Switch>
    <AppContainer>
      <Switch>
        <Route path="/" exact component={BuilderContainer} />
        <Route path="/stage" exact component={StageContainer} />
      </Switch>
    </AppContainer>
  </Switch>
);
