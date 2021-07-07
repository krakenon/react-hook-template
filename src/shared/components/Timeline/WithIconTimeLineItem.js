import React from 'react';

const WithIconTimeLineItem = ({ styleName, color, timeLine, children }) => {
  const { time, title, description } = timeLine;
  return (
    <div className={`kd-timeline-item kd-timeline-time-item ${styleName}`}>
      <div className="kd-timeline-time">{time}</div>
      <div className={`kd-timeline-badge kd-bg-${color}`}>{children}</div>
      <div className="kd-timeline-panel">
        <h4 className={`kd-timeline-tile kd-text-${color}`}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default WithIconTimeLineItem;
