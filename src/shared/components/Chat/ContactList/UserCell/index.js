import React from 'react';
import { Avatar } from 'antd';

const UserCell = ({ onSelectUser, selectedSectionId, user }) => {
  return (
    <div
      className={`kd-chat-user-item ${
        selectedSectionId === user.id ? 'active' : ''
      }`}
      onClick={() => {
        onSelectUser(user);
      }}
    >
      <div className="kd-chat-user-row">
        <div className="kd-chat-avatar">
          <div className="kd-status-pos">
            <Avatar src={user.thumb} className="kd-size-40" alt="Abbott" />
            <span className={`kd-status ${user.status}`} />
          </div>
        </div>

        <div className="kd-chat-contact-col">
          <div className="h4 kd-name">{user.name}</div>
          <div className="kd-chat-info-des kd-text-truncate">
            {user.mood.substring(0, 40) + '...'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCell;
