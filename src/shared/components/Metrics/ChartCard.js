import Widget from '@kongd/components/Widget';
import React from 'react';

const ChartCard = ({ title, children, styleName, desc }) => {
  return (
    <Widget styleName="kd-card-full">
      <div className="kd-actchart kd-px-3 kd-pt-3">
        <h2 className={`kd-chart-${styleName} kd-mb-1`}>
          {title}% <i className="icon icon-menu-up kd-fs-sm" />
        </h2>
        <p className="kd-mb-0 kd-fs-sm kd-text-grey">{desc}</p>
      </div>
      {children}
    </Widget>
  );
};

export default ChartCard;
