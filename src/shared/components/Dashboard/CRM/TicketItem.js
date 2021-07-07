import Aux from '@kongd/components/Auxiliary';
import { Avatar } from 'antd';
import React from 'react';

import { taskStatus } from '../../../../src/routes/main/dashboard/CRM/data';

const getStatus = (status) => {
  const statusData = taskStatus.filter(
    (taskStatus, index) => status === taskStatus.id
  )[0];
  return (
    <Aux>
      <span className="kd-nonhover">
        <i
          className={`icon icon-circle kd-fs-sm kd-text-${statusData.color}`}
        />
      </span>
      <span
        className={`kd-badge kd-hover kd-mb-0 kd-text-white kd-badge-${statusData.color}`}
      >
        {statusData.title}
      </span>
    </Aux>
  );
};

const TicketItem = ({ data }) => {
  const { id, title, avatar, description, status } = data;
  return (
    <div
      key={'TicketItem' + id}
      className="kd-media kd-task-list-item kd-flex-nowrap"
    >
      <Avatar className="kd-mr-3 kd-size-36" src={avatar} />
      <div className="kd-media-body kd-task-item-content">
        <div className="kd-task-item-content-left">
          <h5 className="kd-text-truncate kd-task-item-title">{title}</h5>
          <p key={id} className="kd-text-grey kd-fs-sm kd-mb-0">
            {description}
          </p>
        </div>
        <div className="kd-task-item-content-right">{getStatus(status)}</div>
      </div>
    </div>
  );
};

export default TicketItem;
