import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import configureStore from '../configureStore';
import App from './App';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import { fetchAllFootballers } from '../actions';

const store = configureStore();

store.dispatch(fetchAllFootballers());

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/profile/:id" component={ProfileContainer} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
