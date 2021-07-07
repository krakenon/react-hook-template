import React from 'react';
import NotificationItem from './NotificationItem';
import { notifications } from './data';
import CustomScrollbars from '@kongd/components/CustomScrollbars';
import Auxiliary from '@kongd/components/Auxiliary';

const AppNotification = () => {
  return (
    <Auxiliary>
      <div className="kd-popover-header">
        <h3 className="kd-mb-0">Notifications</h3>
        <i className="kd-icon-btn icon icon-charvlet-down" />
      </div>
      <CustomScrollbars className="kd-popover-scroll">
        <ul className="kd-sub-popover">
          {notifications.map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
        </ul>
      </CustomScrollbars>
    </Auxiliary>
  );
};

export default AppNotification;
