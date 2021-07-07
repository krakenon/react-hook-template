import Widget from '@kongd/components/Widget';
import React from 'react';

const IconCard = ({ color, icon }) => {
  return (
    <Widget
      styleName={`kd-card-full kd-p-2 kd-text-center kd-text-primary ${color}`}
    >
      <i className={`icon icon-${icon} kd-fs-iconcard`} />
    </Widget>
  );
};

export default IconCard;
