import Widget from '@kongd/components/Widget';
import { Badge } from 'antd';
import React from 'react';

const BuildingCard = () => {
  return (
    <Widget styleName="kd-card-full kd-dot-arrow-hover">
      <div className="kd-media kd-align-items-center kd-flex-nowrap">
        <div className="kd-px-3 kd-build-box-lay">
          <img
            alt="..."
            src={require('assets/images/widget/building.png')}
            className=""
          />
        </div>
        <div className="kd-media-body kd-py-3 kd-pr-4 kd-build-box-lay-content">
          <Badge
            className="kd-badge-radius-sm kd-mb-2"
            count="34 New"
            style={{ backgroundColor: '#52c41a' }}
          />
          <h2 className="h4 kd-text-truncate kd-mb-1">Home & Offices</h2>

          <p className="kd-mb-0 kd-text-grey kd-fs-sm">Properties this week</p>
          <div className="kd-dot-arrow">
            <div className="kd-bg-primary kd-hover-arrow">
              <i className="icon icon-long-arrow-right kd-text-white" />
            </div>
            <div className="kd-dot">
              <i className="icon icon-ellipse-v kd-text-primary" />
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default BuildingCard;
