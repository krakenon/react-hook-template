import React from 'react';

const SearchBox = ({ styleName, placeholder, onChange, value }) => {
  return (
    <div className={`kd-search-bar ${styleName}`}>
      <div className="kd-form-group">
        <input
          className="ant-input"
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <span className="kd-search-icon kd-pointer">
          <i className="icon icon-search" />
        </span>
      </div>
    </div>
  );
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: '',
  value: '',
};
