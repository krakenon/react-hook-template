import CustomScrollbars from '@kongd/components/CustomScrollbars';
import React from 'react';

import MailListItem from './MailListItem';

const MailList = ({ mails, onMailSelect, onMailChecked, onStartSelect }) => {
  return (
    <div className="kd-module-list kd-mail-list">
      <CustomScrollbars className="kd-module-content-scroll">
        {mails.map((mail, index) => (
          <MailListItem
            key={index}
            mail={mail}
            onMailSelect={onMailSelect}
            onMailChecked={onMailChecked}
            onStartSelect={onStartSelect}
          />
        ))}
      </CustomScrollbars>
    </div>
  );
};

export default MailList;
