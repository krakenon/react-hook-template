import WidgetHeader from '@kongd/components/WidgetHeader';
import React from 'react';

const Interests = ({ interestList }) => {
  return (
    <div className="kd-entry-sec">
      <WidgetHeader title="Interests" />
      <ul className="kd-list-inline">
        {interestList.map((interest) => (
          <li key={interest.id}>
            <span className="kd-link kd-btn kd-btn-white kd-mb-10">
              {interest.interest}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
