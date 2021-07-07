import Auxiliary from '@kongd/components/Auxiliary';
import React from 'react';

const AboutItem = ({ data }) => {
  const { title, icon, desc, userList } = data;
  return (
    <Auxiliary>
      <div className="kd-media kd-flex-nowrap kd-mt-3 kd-mt-lg-4 kd-mb-2">
        <div className="kd-mr-3">
          <i className={`icon icon-${icon} kd-fs-xlxl kd-text-orange`} />
        </div>
        <div className="kd-media-body">
          <h6 className="kd-mb-1 kd-text-grey">{title}</h6>
          {userList === '' ? null : userList}
          {desc === '' ? null : <p className="kd-mb-0">{desc}</p>}
        </div>
      </div>
    </Auxiliary>
  );
};

export default AboutItem;
