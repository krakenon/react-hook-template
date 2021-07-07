import { Avatar } from 'antd';
import React from 'react';

const NotificationItem = ({ notification }) => {
  const { icon, image, title, time } = notification;
  return (
    <li className="kd-media">
      <Avatar className="kd-size-40 kd-mr-3" alt={image} src={image} />
      <div className="kd-media-body kd-align-self-center">
        <p className="kd-fs-sm kd-mb-0">{title}</p>
        <i className={`icon icon-${icon} kd-pr-2`} />{' '}
        <span className="kd-meta-date">
          <small>{time}</small>
        </span>
      </div>
    </li>
  );
};

export default NotificationItem;
