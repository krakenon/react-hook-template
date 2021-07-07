import PropTypes from 'prop-types';
import React from 'react';

const WidgetHeader = ({ title, extra, styleName }) => {
  return (
    <h2 className={`kd-entry-title ${styleName}`}>
      {title}
      <span className="kd-text-primary kd-fs-md kd-pointer kd-ml-auto kd-d-none kd-d-sm-block">
        {extra}
      </span>
    </h2>
  );
};

WidgetHeader.defaultProps = {
  styleName: '',
};

WidgetHeader.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
};

export default WidgetHeader;
