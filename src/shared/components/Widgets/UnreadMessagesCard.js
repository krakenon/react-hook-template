import Widget from '@kongd/components/Widget';
import React from 'react';

const UnreadMessagesCard = () => {
  return (
    <Widget styleName="kd-blue-cyan-gradient kd-text-white kd-card-1367-p">
      <div className="kd-flex-row kd-justify-content-between kd-mb-2">
        <i className="icon icon-mail-open kd-fs-xxl kd-mr-2" />
        <i className="icon icon-long-arrow-right kd-fs-xxl" />
      </div>
      <h2 className="kd-text-white">271</h2>
      <p className="kd-mb-0">New messages</p>
    </Widget>
  );
};

export default UnreadMessagesCard;
