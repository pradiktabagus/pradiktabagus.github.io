import React from 'react';
import PropTypes from 'prop-types';
require('al-styles/components/tabs.scss');
require('bulma/css/bulma.css');
class TabPanes extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' is-active';
    }

    return (
      <li className={className} onClick={onClick}>
        <a>{label}</a>
      </li>
    );
  }
}

export default TabPanes;
