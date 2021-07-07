import Widget from '@kongd/components/Widget';
import React from 'react';

const AayurvedaCard = () => {
  return (
    <Widget styleName="kd-card-full kd-text-center">
      <div className="kd-pt-4 kd-px-3">
        <div className="kd-separator kd-bg-success-dark" />
        <h2 className="kd-mb-4 kd-text-success-dark">Aayurveda</h2>
        <p>Learn from experts this webinar explains right</p>
        <span className="kd-text-primary kd-pointer kd-text-uppercase kd-mb-3 kd-mb-xxl-2 kd-d-block">
          learn More
        </span>
      </div>
      <div className="kd-mt-xxl-3 kd-ayurveda-thumb">
        <img
          className="kd-img-fluid kd-w-100"
          alt="ayurveda"
          src={'https://via.placeholder.com/576x330'}
        />
      </div>
    </Widget>
  );
};

export default AayurvedaCard;
