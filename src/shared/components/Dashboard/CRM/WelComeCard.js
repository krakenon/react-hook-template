import { Icon } from 'antd';
import React from 'react';

const WelComeCard = () => {
  return (
    <div className="kd-wel-ema kd-pt-xl-2">
      <h1 className="kd-mb-3">Welcome Ema!</h1>
      <p className="kd-fs-sm kd-text-uppercase">You Have</p>
      <ul className="kd-list-group">
        <li>
          <Icon type="message" />
          <span>5 Unread messages</span>
        </li>
        <li>
          <Icon type="mail" />
          <span>2 Pending invitations</span>
        </li>
        <li>
          <Icon type="profile" />
          <span>7 Due tasks</span>
        </li>
        <li>
          <Icon type="bell" />
          <span>3 Other notifications</span>
        </li>
      </ul>
    </div>
  );
};

export default WelComeCard;
