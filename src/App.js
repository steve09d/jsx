import React, { Fragment } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NewComment } from './components/comments/NewComment';
//import { Routes } from './components/routing/Routes';

const App = () => {
  return <NewComment />;
  /*return (
    <Router>
      <Fragment>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );*/
};

export default App;
