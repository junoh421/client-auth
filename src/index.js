import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/app';
import NewUser from './components/new_user';
import LoginUser from './components/login_user';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style/index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
      <div>
        <Switch>
          <Route path='/login' component={LoginUser} />
          <Route path='/users/new' component={NewUser} />
          <Route path='/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
