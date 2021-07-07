import Widget from '@kongd/components/Widget';
import React from 'react';

const UserCard = () => {
  return (
    <Widget styleName="kd-card-full kd-dot-arrow-hover">
      <div className="kd-user-wid-row">
        <div className="kd-user-wid kd-mr-3">
          <img
            alt="..."
            src={'https://via.placeholder.com/150x150'}
            className="kd-object-cover"
          />
        </div>
        <div className="kd-user-wid-body kd-py-3 kd-pr-3">
          <div className="ant-row-flex">
            <h2 className="h4 kd-mr-1 kd-mb-1">Mila Alba</h2>
          </div>
          <p className="kd-mb-1 kd-text-grey kd-fs-sm">
            Creative Head
            <br /> @example
          </p>
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

export default UserCard;
