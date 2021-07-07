import { Avatar } from 'antd';
import React from 'react';

const SentMessageCell = ({ conversation }) => {
  return (
    <div className="kd-chat-item kd-flex-row-reverse">
      <Avatar
        className="kd-size-40 kd-align-self-end"
        src={'https://via.placeholder.com/150x150'}
        alt={conversation.name}
      />

      <div className="kd-bubble-block">
        <div className="kd-bubble">
          <div className="kd-message">{conversation.message}</div>
          <div className="kd-time kd-text-muted kd-text-right kd-mt-2">
            {conversation.sentAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentMessageCell;
