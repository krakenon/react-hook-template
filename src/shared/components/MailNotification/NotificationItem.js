import { Avatar } from 'antd';
import React from 'react';

const NotificationItem = ({ notification }) => {
  const { image, badge, name, time, message } = notification;
  return (
    <li className="kd-media">
      <div className="kd-user-thumb kd-mr-3">
        <Avatar className="kd-size-40" alt={image} src={image} />
        {badge > 0 ? (
          <span className="kd-badge kd-badge-danger kd-text-white kd-rounded-circle">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="kd-media-body">
        <div className="kd-flex-row kd-justify-content-between kd-align-items-center">
          <h5 className="kd-text-capitalize kd-user-name kd-mb-0">
            <span className="kd-link">{name}</span>
          </h5>
          <span className="kd-meta-date">
            <small>{time}</small>
          </span>
        </div>
        <p className="kd-fs-sm">{message}</p>
        <span className="kd-btn kd-btn-sm kd-top2 kd-text-muted">
          <i className="icon icon-reply kd-pr-2" />
          Reply
        </span>
        <span className="kd-btn kd-btn-sm kd-top2 kd-text-muted">
          <i className="icon icon-custom-view kd-pr-2" />
          Read
        </span>
      </div>
    </li>
  );
};

export default NotificationItem;
