import React from 'react';
import { Route, IndexRoute } from 'react-router';


// Import all page components here

import App from './components/App';
import Cart from './Cart';
// import MainPage from './components/MainPage';



export default (
  <Route path="/" component={App}>
    {/* <IndexRoute component={MainPage} /> */}
    <Route path="/cart" component={Cart} />
  </Route>
);