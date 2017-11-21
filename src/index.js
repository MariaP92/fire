import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Board from './Board';
import MainBoard from './MainBoard';

import { Provider } from 'redux-zero/react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker';



const Index = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>

        <Switch>
          <Route path="/login" render={() => <LogIn />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/mainBoard" component={() =><MainBoard/>} />
          <Route path="/board" component={() =><Board/>} />
          <Route component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

