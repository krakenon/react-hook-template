import React from 'react';

import UserCell from './UserCell';

const ChatUserList = ({ chatUsers, selectedSectionId, onSelectUser }) => {
  return (
    <div className="kd-chat-user">
      {chatUsers.map((chat, index) => (
        <UserCell
          key={index}
          chat={chat}
          selectedSectionId={selectedSectionId}
          onSelectUser={onSelectUser}
        />
      ))}
    </div>
  );
};

export default ChatUserList;
