import React from 'react';

function EventItem({ data }) {
  const { image, title, date, address } = data;
  return (
    <div className="kd-mb-4">
      <div className="kd-mr-3" style={{ height: 150, width: 200 }}>
        <img className="kd-img-fluid" src={image} alt="..." />
      </div>
      <h4 className="kd-mt-0">{title}</h4>
      <div className="kd-flex-row kd-m-0">
        <i className="icon icon-calendar kd-mr-2" />
        <p>{date}</p>
      </div>
      <div className="kd-flex-row kd-m-0">
        <i className="icon icon-map-geo-location kd-mr-2" />
        <p>{address}</p>
      </div>
    </div>
  );
}

export default EventItem;
