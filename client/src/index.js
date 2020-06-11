import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import history from './history';
import routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
