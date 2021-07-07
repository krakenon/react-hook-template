import Widget from '@kongd/components/Widget';
import React, { useState } from 'react';

const ChartCard = (props) => {
  const [isHide, setHide] = useState(false);
  const handleToggle = () => {
    setHide(!isHide);
  };

  const { prize, title, styleName, desc, bgColor, percent } =
    props.chartProperties;
  return (
    <Widget styleName={`kd-card-full`}>
      <div
        className={
          isHide === true
            ? `kd-fillchart kd-bg-${bgColor} kd-fillchart-nocontent`
            : `kd-fillchart kd-bg-${bgColor} kd-overlay-fillchart`
        }
      >
        <div className="ant-card-head-title">{title}</div>
        {props.children}
        <div className="kd-fillchart-content">
          <div className="ant-card-head-title kd-mb-3">{title}</div>
          <h2 className="kd-mb-2 kd-fs-xxxl kd-font-weight-medium">{prize}</h2>
          {percent > 0}
          <p className="kd-mb-0 kd-fs-sm">
            <span
              className={`kd-font-weight-medium kd-fs-md kd-chart-${styleName}`}
            >
              {percent}
              {percent > 0 ? (
                <i className="icon icon-menu-up kd-fs-sm" />
              ) : null}
            </span>
            {desc}
          </p>
        </div>
        <div className="kd-fillchart-btn-close" onClick={handleToggle}>
          <i className="icon icon-close" />
        </div>
        <div className="kd-fillchart-btn" onClick={handleToggle}>
          <i className={`icon icon-stats kd-fs-xxxl`} />
        </div>
      </div>
    </Widget>
  );
};

export default ChartCard;
