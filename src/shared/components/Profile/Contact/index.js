import Widget from '@kongd/components/Widget';
import React from 'react';

import { contactList } from '../../../routes/socialApps/Profile/data';

const Contact = () => {
  return (
    <Widget title="Contact" styleName="kd-card-profile-sm">
      {contactList.map((data, index) => (
        <div
          key={index}
          className="kd-media kd-align-items-center kd-flex-nowrap kd-pro-contact-list"
        >
          <div className="kd-mr-3">
            <i className={`icon icon-${data.icon} kd-fs-xxl kd-text-grey`} />
          </div>
          <div className="kd-media-body">
            <span className="kd-mb-0 kd-text-grey kd-fs-sm">{data.title}</span>
            <p className="kd-mb-0">{data.desc}</p>
          </div>
        </div>
      ))}
    </Widget>
  );
};

export default Contact;
