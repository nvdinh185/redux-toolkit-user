import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const NotFound = React.lazy(() => import('components/NotFound'));

const AddEditPage = React.lazy(() => import('pages/AddEdit'));
const HomePage = React.lazy(() => import('pages/Home'));

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/users" />

          <Route path='/users' component={HomePage} />
          <Route path='/add' component={AddEditPage} />
          <Route path='/edit/:userId' component={AddEditPage} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;