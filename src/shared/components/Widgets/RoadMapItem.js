import React from 'react';

const RoadMapItem = ({ data }) => {
  const { image, image2, title, desc } = data;
  return (
    <div className="kd-slider">
      <div className="kd-slider-img">
        <img alt="example" src={image} style={{ maxHeight: 185 }} />
        <img className="kd-img-up" alt="example" src={image2} />
      </div>
      <div className="kd-slider-content">
        <h4>{title}</h4>
        <p className="kd-text-grey">{desc}</p>
      </div>
    </div>
  );
};

export default RoadMapItem;
