import { Avatar } from 'antd';
import React from 'react';

const DefaultTimeLineItem = ({ styleName, timeLine }) => {
  const { time, image, title, description } = timeLine;
  return (
    <div className={`kd-timeline-item ${styleName}`}>
      <div className="kd-timeline-badge kd-timeline-img">
        <img
          src={require('assets/images/pentagon.png')}
          alt="Pentagon"
          title="Pentagon"
        />
      </div>

      <div className="kd-timeline-panel">
        <div className="kd-timeline-panel-header">
          <div className="kd-timeline-header-img kd-timeline-left">
            <Avatar
              size="large"
              className="kd-size-60 kd-rounded-circle"
              src={image}
            />
          </div>
          <div className="kd-timeline-heading">
            <h5>{time}</h5>
            <h3 className="kd-timeline-title">{title}</h3>
          </div>
        </div>
        <div className="kd-timeline-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default DefaultTimeLineItem;
