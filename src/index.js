import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import appRoutes from './routes';
import {loadCourses} from './actions/myCourseActions';
import './styles/styles.css'; //webpack can import css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={appRoutes} />
  </Provider>,
  document.getElementById('app')
);
