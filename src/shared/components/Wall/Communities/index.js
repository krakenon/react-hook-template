import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import WidgetHeader from '@kongd/components/WidgetHeader';
import React from 'react';

const Communities = (props) => {
  const { communitiesList } = props;
  return (
    <div className="kd-entry-sec">
      <WidgetHeader title="Communities" />
      <ul className="kd-gallery-list">
        {communitiesList.map((communities, index) => (
          <li key={index}>
            <div className="kd-gallery-thumb">
              <img alt="..." src={communities.image} />
              <div className="kd-gallery-thumb-content">
                <h6>{communities.title}</h6>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Communities;
