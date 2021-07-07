import Widget from '@kongd/components/Widget';
import React from 'react';

const ChartCard = ({ prize, title, children, styleName, desc, icon }) => {
  return (
    <Widget styleName="kd-card-full">
      <div className="kd-actchart kd-px-3 kd-pt-3">
        <div className="ant-row-flex">
          <h2 className="kd-mb-0 kd-fs-xxl kd-font-weight-medium">
            {prize}
            <span
              className={`kd-mb-0 kd-ml-2 kd-pt-xl-2 kd-fs-lg kd-chart-${styleName}`}
            >
              {title}% <i className="icon icon-menu-up kd-fs-sm" />
            </span>
          </h2>
          <i
            className={`icon icon-${icon} kd-fs-xl kd-ml-auto kd-text-primary kd-fs-xxxl`}
          />
        </div>
        <p className="kd-mb-0 kd-fs-sm kd-text-grey">{desc}</p>
      </div>
      {children}
    </Widget>
  );
};

export default ChartCard;
