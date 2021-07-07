import Widget from '@kongd/components/Widget';
import React from 'react';

import LineIndicator from './LineIndicator';

const TicketByDepartment = () => {
  return (
    <Widget title="TICKETS BY DEPARTMENT">
      <div className="kd-media kd-mb-4 kd-align-items-center">
        <div className="kd-mr-3">
          <i
            className="icon icon-tickets kd-text-blue"
            style={{ fontSize: 36 }}
          />
        </div>
        <div className="kd-media-body">
          <h1 className="kd-h1-lg kd-mb-0">37</h1>
          <span>Total Ticket</span>
        </div>
      </div>
      <ul className="kd-line-indicator kd-line-indicator-half">
        <li>
          <LineIndicator width="100%" title="Sales" color="purple" value="14" />
        </li>
        <li>
          <LineIndicator width="70%" title="Account" color="amber" value="70" />
        </li>
        <li>
          <LineIndicator
            width="85%"
            title="Technical"
            color="green"
            value="12"
          />
        </li>
        <li>
          <LineIndicator
            width="30%"
            title="Dispute"
            color="orange"
            value="30"
          />
        </li>
      </ul>
    </Widget>
  );
};

export default TicketByDepartment;
