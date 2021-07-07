import Widget from '@kongd/components/Widget';
import React from 'react';

import { eventList } from '../../../routes/socialApps/Profile/data';
import EventItem from './EventItem';

const Events = () => {
  return (
    <Widget styleName="kd-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title kd-mb-1">Events</span>
        <p className="kd-text-grey kd-fs-sm kd-mb-0">What Kiley is up-to</p>
      </div>
      <div className="kd-pt-md-3">
        {eventList.map((data, index) => (
          <EventItem key={index} data={data} />
        ))}
      </div>
    </Widget>
  );
};

export default Events;
