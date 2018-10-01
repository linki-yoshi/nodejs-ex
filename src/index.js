"use strict";
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

// You can choose your kind of history here (e.g. browserHistory)
// import { Router, hashHistory as history } from 'react-router';
// import route from './routes';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from "./components/App";
import Test from "./components/test";
import 'semantic-ui-css/semantic.min.css';

// store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
    <Provider store={store}>
        {/* <Router route={route} history={history} /> */}
        <App />
    </Provider>, document.getElementById('root'));