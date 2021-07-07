import Aux from '@kongd/components/Auxiliary';
import PropTypes from 'prop-types';
import React from 'react';

const LineIndicator = ({ title, title2, width, value, color }) => {
  return (
    <Aux>
      <div className="ant-row-flex">
        <p className="kd-mr-1">{title}</p>
        <p className="kd-text-grey">| {title2}</p>
      </div>
      <div className="kd-line-indi-info">
        <div
          className={`kd-line-indi kd-bg-${color}`}
          style={{
            width: Number.parseInt(width, 10) * 4,
          }}
        />
        <span className="kd-line-indi-count kd-ml-2">{value}</span>
      </div>
    </Aux>
  );
};

export default LineIndicator;

LineIndicator.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
