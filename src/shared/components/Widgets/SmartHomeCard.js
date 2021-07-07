import Widget from '@kongd/components/Widget';
import React from 'react';

const SmartHomeCard = () => {
  return (
    <Widget styleName="kd-card-full">
      <img
        className="kd-smart-img"
        alt="example"
        src={'https://via.placeholder.com/576x383'}
      />
      <div className="kd-p-3">
        <p className="kd-mb-2">Smart home on iPad with smart kids</p>
        <span className="kd-text-primary kd-pointer kd-text-uppercase kd-fs-sm">
          Read More
        </span>
      </div>
    </Widget>
  );
};

export default SmartHomeCard;
