import Widget from '@kongd/components/Widget';
import React from 'react';

const Photos = ({ photoList }) => {
  return (
    <Widget title="Photos" styleName="kd-card-profile-sm">
      <div className="kd-pt-2">
        <ul className="kd-gallery-list">
          {photoList.map((photo, index) => (
            <li key={index}>
              <img alt="..." src={photo.image} />
            </li>
          ))}
        </ul>
        <span className="kd-text-primary kd-fs-md kd-pointer kd-d-block">
          Go to gallery{' '}
          <i
            className={`icon icon-long-arrow-right kd-fs-xxl kd-ml-2 kd-d-inline-flex kd-vertical-align-middle`}
          />
        </span>
      </div>
    </Widget>
  );
};
export default Photos;
