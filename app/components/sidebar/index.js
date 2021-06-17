import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fagith } from '@fortawesome/free-solid-svg-icons';
import 'al-styles/components/sidebar.scss';
function index(props) {
  return (
    <div className="sidebar">
      <div className="inner-sidebar">
        <div className="profile">
          <div className="photo-profile" />
          <label>Rofiyanto Bagus P.</label>
        </div>
        <div className="find-me">
          <ul>
            <li>Linkend</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
index.propTypes = {};

export default index;
