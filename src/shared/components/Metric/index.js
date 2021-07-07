import { Card } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const Metrics = ({ title, styleName, children }) => {
  return (
    <Card title={title} className={`kd-card-metrics ${styleName}`}>
      {children}
    </Card>
  );
};

export default Metrics;
Metrics.defaultProps = {
  styleName: '',
};

Metrics.propTypes = {
  title: PropTypes.string.isRequired,
  styleName: PropTypes.string,
  children: PropTypes.node.isRequired,
};
