import Widget from '@kongd/components/Widget';
import React from 'react';

const EcommerceStatus = ({
  icon,
  title,
  subTitle,
  color,
  colorTitle,
  colorSubTitle,
}) => {
  return (
    <Widget styleName={`kd-card-full kd-py-4 kd-px-2 kd-bg-${color}`}>
      <div className="kd-flex-row kd-justify-content-center kd-mb-3 kd-mb-sm-4">
        <span
          className={`kd-size-80 kd-border kd-border-${colorTitle} kd-text-${colorTitle} kd-flex-row kd-justify-content-center kd-align-items-center kd-rounded-circle`}
        >
          <i className={`icon icon-${icon} kd-fs-xlxl`} />
        </span>
      </div>
      <div className="kd-text-center">
        <h2
          className={`kd-fs-xxxl kd-font-weight-medium kd-text-${colorTitle}`}
        >
          {title}
        </h2>
        <p className={`kd-mb-0 kd-mb-sm-3 kd-text-${colorSubTitle}`}>
          {subTitle}
        </p>
      </div>
    </Widget>
  );
};

export default EcommerceStatus;
