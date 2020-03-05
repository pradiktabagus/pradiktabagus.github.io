import React from 'react';
import PropTypes from 'prop-types';
import 'al-styles/components/search.scss';
export default function Search({ placeholder, value, name }) {
  return (
    <div className="search">
      <form>
        <input placeholder={placeholder} value={value} name={name} />
      </form>
    </div>
  );
}
Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
};
