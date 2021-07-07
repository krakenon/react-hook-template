import WidgetHeader from '@kongd/components/WidgetHeader';
import React from 'react';

const Photos = ({ photoList, title }) => {
  return (
    <div className="kd-entry-sec">
      <WidgetHeader title={title} />

      <ul className="kd-gallery-list">
        {photoList.map((photo, index) => (
          <li key={index}>
            <img alt="..." src={photo.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Photos;
