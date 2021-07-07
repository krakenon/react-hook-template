import React from 'react';

const AppModuleHeader = (props) => {
  const { placeholder, onChange, value } = props;

  return (
    <div className="kd-module-box-header-inner">
      <div className="kd-search-bar kd-lt-icon-search-bar-lg kd-module-search-bar kd-d-none kd-d-sm-block">
        <div className="kd-form-group">
          <input
            className="ant-input kd-border-0"
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
      <div className="kd-module-box-header-right">
        <span className="kd-fs-xl">
          {' '}
          <i className="icon icon-apps kd-icon-btn" />
        </span>
        <span className="kd-fs-xl">
          <i className="icon icon-notification kd-icon-btn" />
        </span>
      </div>
    </div>
  );
};

export default AppModuleHeader;

AppModuleHeader.defaultProps = {
  styleName: '',
  value: '',
  notification: true,
  apps: true,
};
