import React from 'react';
// import PropTypes from 'prop-types';
import 'al-styles/layouts/auth.scss';
import Tabs from '../../components/tabs/Tab';
import RegisterPage from '../../components/auth/RegisterPage';
import LoginPage from '../../components/auth/LoginPage';
const tabPanes = [
  { label: 'Login', comp: LoginPage },
  { label: 'Register', comp: RegisterPage },
];
function index() {
  return (
    <div className="container">
      <div className="card">
        <Tabs>
          {tabPanes.map(panes => (
            <div label={panes.label}>
              <panes.comp />
            </div>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

// index.propTypes = {};

export default index;
