import React from 'react';
import PropTypes from 'prop-types';
import Linkedin from '../../images/linkedin.svg';
import Github from '../../images/github.svg';
import Mail from '../../images/envelope.svg';
import Instagram from '../../images/instagram.svg';
import Wattpad from '../../images/wattpad.svg';
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
          <ul className="social-media">
            <li className="items">
              <a
                href="https://www.linkedin.com/in/rofiyanto-bagus-614a09a9/"
                target="_blank"
              >
                <img src={Linkedin} alt="Linkedin" />
                <h4>Rofiyanto</h4>
              </a>
            </li>
            <li className="items">
              <a
                href="https://www.linkedin.com/in/rofiyanto-bagus-614a09a9/"
                target="_blank"
              >
                <img src={Github} alt="Linkedin" />
                <h4>pradiktabagus</h4>
              </a>
            </li>
            <li className="items">
              <a
                href="https://www.linkedin.com/in/rofiyanto-bagus-614a09a9/"
                target="_blank"
              >
                <img src={Instagram} alt="Linkedin" />
                <h4>rofiyanto_bp</h4>
              </a>
            </li>
            <li className="items">
              <a
                href="https://www.linkedin.com/in/rofiyanto-bagus-614a09a9/"
                target="_blank"
              >
                <img src={Mail} alt="Linkedin" />
                <h4>pradiktabagus@gmail.com</h4>
              </a>
            </li>
            <li className="items">
              <a
                href="https://www.linkedin.com/in/rofiyanto-bagus-614a09a9/"
                target="_blank"
              >
                <img src={Wattpad} alt="Linkedin" />
                <h4>mika_isuzu</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
index.propTypes = {};

export default index;
