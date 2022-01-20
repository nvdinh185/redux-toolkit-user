import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import NotFound from 'components/NotFound';
import AddEditPage from 'pages/AddEdit';
import HomePage from 'pages/Home';

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/users" />

          <Route path='/users' component={HomePage} />
          <Route path='/add' component={AddEditPage} />
          <Route path='/edit/:userId' component={AddEditPage} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;