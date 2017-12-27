import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import SignUp from './containers/auth/signup';
import SignIn from './containers/auth/signin';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import './style/index.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if (token) {
  store.dispatch( {type: 'AUTH_USER'} );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
