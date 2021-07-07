import React from 'react';

import LineIndicator from './LineIndicator';

const SiteAudience = () => {
  return (
    <div className="kd-site-dash kd-mb-2 kd-pt-3 kd-pt-sm-0 kd-pt-xl-2">
      <h6 className="kd-text-uppercase kd-mb-2 kd-mb-sm-4">SITE AUDIENCE</h6>
      <ul className="kd-line-indicator">
        <li>
          <LineIndicator width="56%" title="Male" color="cyan" value="56%" />
        </li>
        <li>
          <LineIndicator
            width="42%"
            title="Female"
            color="geekblue"
            value="42%"
          />
        </li>
        <li>
          <LineIndicator
            width="20%"
            title="Others"
            color="orange"
            value="20%"
          />
        </li>
      </ul>
    </div>
  );
};
export default SiteAudience;
