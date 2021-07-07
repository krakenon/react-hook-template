import Widget from '@kongd/components/Widget';
import React from 'react';

import { ticketList } from '../../../routes/main/dashboard/CRM/data';
import TicketItem from './TicketItem';

const TicketList = () => {
  return (
    <Widget
      title={<h2 className="h4 kd-text-capitalize kd-mb-0">Recent Tickets</h2>}
      styleName="kd-card-ticketlist"
      extra={
        <h5 className="kd-text-primary kd-mb-0 kd-pointer kd-d-none kd-d-sm-block">
          See all tickets{' '}
          <i className="icon icon-long-arrow-right kd-fs-xxl kd-ml-2 kd-d-inline-flex kd-vertical-align-middle" />
        </h5>
      }
    >
      {ticketList.map((ticket, index) => (
        <TicketItem key={index} data={ticket} />
      ))}
      <div className="kd-task-list-item kd-d-block kd-d-sm-none">
        <h5 className="kd-text-primary kd-mb-0 kd-pointer">
          See all tickets{' '}
          <i className="icon icon-long-arrow-right kd-fs-xxl kd-ml-2 kd-d-inline-flex kd-vertical-align-middle" />
        </h5>
      </div>
    </Widget>
  );
};

export default TicketList;
