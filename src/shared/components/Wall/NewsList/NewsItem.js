import React from 'react';

function NewsItem({ data }) {
  const { image, description } = data;
  return (
    <div className="kd-mb-4">
      <div className="kd-mr-3" style={{ height: 150, width: 200 }}>
        <img className="kd-img-fluid" src={image} alt="..." />
      </div>
      <p className="kd-mt-0 kd-text-sm">{description}</p>
    </div>
  );
}

export default NewsItem;
