import { Avatar } from 'antd';
import React from 'react';

const ReceivedMessageCell = ({ conversation, user }) => {
  return (
    <div className="kd-chat-item">
      <Avatar
        className="kd-size-40 kd-align-self-end"
        src={user.thumb}
        alt=""
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

export default ReceivedMessageCell;
