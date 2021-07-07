import Widget from '@kongd/components/Widget';
import React from 'react';

const IconWithTextCard = ({ cardColor, icon, title, subTitle, iconColor }) => {
  return (
    <Widget styleName={`kd-card-full kd-p-3 kd-bg-${cardColor} kd-text-white`}>
      <div className="kd-media kd-align-items-center kd-flex-nowrap">
        <div className="kd-mr-2 kd-mr-xxl-3">
          <i className={`icon icon-${icon} kd-fs-icon-lg`} />
        </div>
        <div className="kd-media-body">
          <h1 className="kd-fs-xxl kd-font-weight-semi-bold kd-mb-1 kd-text-white">
            {title}
          </h1>
          <p className="kd-mb-0">{subTitle}</p>
        </div>
      </div>
    </Widget>
  );
};

export default IconWithTextCard;
