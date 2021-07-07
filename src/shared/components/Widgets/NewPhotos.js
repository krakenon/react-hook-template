import Widget from '@kongd/components/Widget';
import { Button } from 'antd';
import React from 'react';

const NewPhotos = () => {
  return (
    <Widget styleName="kd-widget-bg">
      <span className="kd-widget-badge">$20/month</span>
      <i className="icon icon-camera kd-fs-xlxl" />

      <h1 className="kd-fs-xxxl kd-font-weight-semi-bold kd-mb-3 kd-mb-sm-4">
        38,248 Photos
      </h1>
      <p>NEW PHOTOS ADDED THIS WEEK</p>
      <p>
        Now kickstart with your next design. Subscribe today and save $20/month
      </p>
      <Button className="kd-mb-1 kd-btn-warning" htmlType="submit">
        Subscribe
      </Button>
    </Widget>
  );
};

export default NewPhotos;
