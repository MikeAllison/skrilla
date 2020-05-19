import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react';

import Accounts from './accounts/containers/Accounts';
import Categories from './categories/containers/Categories';
import Merchants from './merchants/containers/Merchants';

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Accounts />
          </Route>
          <Route path="/accounts" exact>
            <Accounts />
          </Route>
          <Route path="/categories" exact>
            <Categories />
          </Route>
          <Route path="/merchants" exact>
            <Merchants />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
