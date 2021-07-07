import { Tag } from 'antd';
import React from 'react';

const PropertiesItemCard = ({ data }) => {
  const {
    image,
    title,
    subTitle,
    name,
    date,
    isFeatured,
    prize,
    sqft,
    bedrooms,
    baths,
    area,
    more,
  } = data;
  return (
    <div className="kd-media kd-featured-item">
      {isFeatured === true ? (
        <Tag color="orange">
          <span className="kd-text-uppercase">featured</span>
        </Tag>
      ) : null}
      <div className="kd-featured-thumb">
        <img className="kd-rounded-lg kd-width-175" src={image} alt="..." />
        <Tag className="kd-rounded-xs kd-bg-orange kd-border-orange kd-text-white">
          Featured
        </Tag>
      </div>
      <div className="kd-media-body kd-featured-content">
        <div className="kd-featured-content-left">
          <Tag className="kd-rounded-xs" color="#06BB8A">
            FOR SALE
          </Tag>
          <h3 className="kd-mb-2">{title}</h3>

          <p className="kd-text-grey kd-mb-1">{subTitle}</p>

          <div className="ant-row-flex">
            <p className="kd-mr-3 kd-mb-1">
              <span className="kd-text-grey">Bedrooms:</span> {bedrooms}
            </p>
            <p className="kd-mr-3 kd-mb-1">
              <span className="kd-text-grey">Baths:</span> {baths}
            </p>
            <p className="kd-mr-3 kd-mb-1">
              <span className="kd-text-grey">Area:</span> {area}
            </p>
            <a className="kd-text-grey kd-text-underline kd-mb-2" href="#/">
              {' '}
              + {more} more
            </a>
          </div>
          <div className="ant-row-flex">
            <p className="kd-text-grey kd-mb-1">
              <i
                className={`icon icon-user kd-fs-xs kd-mr-2 kd-d-inline-flex kd-vertical-align-middle`}
              />
              {name}
            </p>
            <p className="kd-text-grey kd-ml-4 kd-mb-1">
              <i
                className={`icon icon-datepicker kd-fs-xs kd-mr-2 kd-d-inline-flex kd-vertical-align-middle`}
              />
              {date}
            </p>
          </div>
        </div>
        <div className="kd-featured-content-right">
          <div>
            <h2 className="kd-text-primary kd-mb-1 kd-font-weight-medium">
              {prize}
            </h2>
            <p className="kd-text-grey kd-fs-sm">{sqft}</p>
          </div>
          <p className="kd-text-primary kd-text-truncate kd-mt-auto kd-mb-0 kd-pointer">
            Check in detail{' '}
            <i
              className={`icon icon-long-arrow-right kd-fs-xxl kd-ml-2 kd-d-inline-flex kd-vertical-align-middle`}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertiesItemCard;
