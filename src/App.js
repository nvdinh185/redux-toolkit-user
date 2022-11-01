import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import NotFound from 'components/NotFound';
import AddEditPage from 'pages/AddEdit';
import HomePage from 'pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/users" />

        <Route path='/users' component={HomePage} />
        <Route path='/add' component={AddEditPage} />
        <Route path='/edit/:userId' component={AddEditPage} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;