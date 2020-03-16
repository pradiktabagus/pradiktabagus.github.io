import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabPanes from './TabPanes';
require('bulma/css/bulma.css');
require('al-styles/components/tabs.scss');
class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;
    return (
      <div>
        <div className="tabs is-centered">
          <ul>
            {children.map(child => {
              const { label } = child.props;
              return (
                <TabPanes
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </ul>
        </div>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
