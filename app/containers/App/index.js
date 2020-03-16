/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import { HomePage, NotFoundPage, Auth } from '..';
import Search from '../../components/search';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <div className="header-fixed">
        <nav className="navbar-fixed">
          <Search placeholder="Search" />
          <NavLink to="/auth" className="login">
            Login
          </NavLink>
        </nav>
      </div>
      <div className="section">
        <Switch>
          <Route exact="exact" path="/" component={HomePage} />
          <Route path="/auth" component={Auth} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <GlobalStyle />
    </div>
  );
}
