import { Card } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const Widget = ({ title, children, styleName, cover, extra, actions }) => {
  return (
    <Card
      title={title}
      actions={actions}
      cover={cover}
      className={`kd-card-widget ${styleName}`}
      extra={extra}
    >
      {children}
    </Card>
  );
};

export default Widget;
Widget.defaultProps = {
  styleName: '',
};

Widget.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  cover: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
};
