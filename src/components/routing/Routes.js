import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CommentDetail from '../comments/CommentDetail';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/comment' component={CommentDetail}></Route>
    </Switch>
  );
};
