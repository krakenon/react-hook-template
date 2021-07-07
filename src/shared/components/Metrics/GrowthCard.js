import Widget from '@kongd/components/Widget';
import React from 'react';

const GrowthCard = ({
  title,
  children,
  styleName,
  desc,
  bgColor,
  textColor,
}) => {
  return (
    <Widget styleName={`kd-card-full kd-bg-${bgColor}`}>
      <div className="kd-actchart kd-px-4 kd-pt-4 kd-mb-3 kd-text-grey">
        <h2
          className={`kd-fs-xxxl kd-font-weight-medium kd-mb-1 kd-chart-${styleName}`}
        >
          {title}% <i className="icon icon-menu-up kd-fs-sm" />
        </h2>
        <p className={`kd-mb-4 kd-text-${textColor}`}>{desc}</p>
      </div>
      {children}
    </Widget>
  );
};

export default GrowthCard;
