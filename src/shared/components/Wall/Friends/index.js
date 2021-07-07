import WidgetHeader from '@kongd/components/WidgetHeader';
import { Badge } from 'antd';
import React from 'react';

function Status(props) {
  const isType = props.isType;
  if (isType === 'online') {
    return <Badge status="success" />;
  } else if (isType === 'away') {
    return <Badge status="warning" />;
  } else {
    return <Badge count={0} status="error" />;
  }
}

const Friends = ({ friendList }) => {
  return (
    <div className="kd-entry-sec">
      <WidgetHeader
        title={
          <span>
            Friends - 530 <span className="kd-text-grey">(27 Mutual)</span>
          </span>
        }
      />
      <ul className="kd-fnd-list">
        {friendList.map((user, index) => (
          <li className="kd-mb-2" key={index}>
            <div className="kd-user-fnd">
              <img alt="..." src={user.image} />
              <div className="kd-user-fnd-content">
                <Status isType={user.status} />
                <h6>{user.name}</h6>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Friends;
