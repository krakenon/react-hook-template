import React from 'react';

const CryptoNewsItem = ({ data }) => {
  const { image, title, subTitle, desc } = data;
  return (
    <div className="kd-news-item">
      <div className="kd-news-thumb">
        <img className="kd-width-175 kd-rounded-lg" src={image} alt="..." />
      </div>
      <div className="kd-news-content">
        <h4 className="kd-mt-0">{title}</h4>
        <p className="kd-mb-2">{subTitle}</p>
        <div className="kd-news-tags-row">
          <div className="kd-news-tags-left">
            <p className="kd-text-grey kd-mb-0 kd-text-truncate">
              <i
                className={`icon icon-tag-new kd-fs-lg kd-mr-2 kd-d-inline-flex kd-vertical-align-middle kd-text-light-grey`}
              />
              {desc}
            </p>
          </div>
          <div className="kd-news-tags-right">
            <p className="kd-text-primary kd-pointer kd-mb-0">
              Ready Full Story
              <i
                className={`icon icon-long-arrow-right kd-fs-xl kd-ml-2 kd-d-inline-flex kd-vertical-align-middle`}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoNewsItem;
