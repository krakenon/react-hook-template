import { Avatar } from 'antd';
import React from 'react';

const ConversationCell = ({ conversation }) => {
  return (
    <div className="kd-flex-row kd-module-detail-item kd-flex-nowrap">
      <div className="kd-chat-todo-avatar">
        <Avatar
          className="kd-rounded-circle kd-size-40"
          src={conversation.thumb}
          alt="..."
        />
      </div>
      <div className="kd-chat-toto-info">
        <div className="kd-flex-column">
          <div className="kd-name kd-mr-2">{conversation.name}</div>
          <div className="kd-time kd-text-muted">{conversation.sentAt}</div>
        </div>
        <div className="kd-message">{conversation.message}</div>
      </div>
    </div>
  );
};

export default ConversationCell;
