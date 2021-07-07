import { Tag } from 'antd';
import React from 'react';

const EventItem = ({ data }) => {
  const { image, title, address, date } = data;

  return (
    <div className="kd-media kd-featured-item">
      <div className="kd-featured-thumb">
        <img className="kd-rounded-lg" src={image} alt="..." />
      </div>
      <div className="kd-media-body kd-featured-content">
        <div className="kd-featured-content-left">
          <Tag className="kd-rounded-xs kd-text-uppercase" color="#06BB8A">
            Music concert
          </Tag>
          <h3 className="kd-mb-2">{title}</h3>
          <div className="ant-row-flex">
            <div className="kd-media kd-text-grey kd-mb-1">
              <i
                className={`icon icon-location kd-fs-lg kd-mr-2 kd-d-inline-flex kd-vertical-align-middle`}
              />
              <span className="kd-media-body kd-ml-1">{address}</span>
            </div>
          </div>
        </div>
        <div className="kd-featured-content-right kd-profile-content-right">
          <h2 className="kd-text-primary kd-mb-1">
            <i
              className={`icon icon-calendar kd-fs-lg kd-mr-2 kd-d-inline-flex kd-vertical-align-middle`}
            />{' '}
            <span className="kd-d-inline-flex kd-vertical-align-middle">
              {date}
            </span>
          </h2>
          <p className="kd-text-primary kd-text-truncate kd-mt-sm-auto kd-mb-0 kd-pointer">
            Check in detail{' '}
            <i
              className={`icon icon-long-arrow-right kd-fs-xxl kd-ml-1 kd-ml-sm-2 kd-d-inline-flex kd-vertical-align-middle`}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
