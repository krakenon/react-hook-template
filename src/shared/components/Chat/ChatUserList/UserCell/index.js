import React from 'react';
import { Avatar } from 'antd';

const UserCell = ({ chat, selectedSectionId, onSelectUser }) => {
  return (
    <div
      className={`kd-chat-user-item ${
        selectedSectionId === chat.id ? 'active' : ''
      }`}
      onClick={() => {
        onSelectUser(chat);
      }}
    >
      <div className="kd-chat-user-row">
        <div className="kd-chat-avatar">
          <div className="kd-status-pos">
            <Avatar src={chat.thumb} className="kd-size-40" alt={chat.name} />
            <span className={`kd-status kd-small kd-${chat.status}`} />
          </div>
        </div>

        <div className="kd-chat-info">
          <span className="kd-name h4">{chat.name}</span>
          <div className="kd-chat-info-des kd-text-truncate">
            {chat.lastMessage.substring(0, 25) + '...'}
          </div>
          <div className="kd-last-message-time">{chat.lastMessageTime}</div>
        </div>

        {chat.unreadMessage > 0 ? (
          <div className="kd-chat-date">
            <div className="kd-bg-primary kd-rounded-circle kd-badge kd-text-white">
              {chat.unreadMessage}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserCell;
