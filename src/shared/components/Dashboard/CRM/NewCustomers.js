import Metrics from '@kongd/components/Metrics';
import { Avatar } from 'antd';
import React from 'react';

const userImageList = [
  {
    id: 1,
    image: require('assets/images/avatar/a5.png'),
  },
  {
    id: 2,
    image: require('assets/images/avatar/a6.png'),
  },
  {
    id: 3,
    image: require('assets/images/avatar/domnic-harris.png'),
  },
  {
    id: 4,
    image: require('assets/images/avatar/a8.png'),
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals',
  },
];

const NewCustomers = () => {
  return (
    <Metrics title="NEW CUSTOMERS">
      <div className="kd-customers">
        <ul className="kd-list-inline kd-customers-list kd-mb-0">
          {userImageList.map((user, index) => (
            <li className="kd-mb-2" key={index}>
              <Avatar src={user.image} />
            </li>
          ))}
        </ul>
      </div>
    </Metrics>
  );
};

export default NewCustomers;
