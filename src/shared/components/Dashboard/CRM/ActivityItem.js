import Auxiliary from '@kongd/components/Auxiliary';
import { Avatar } from 'antd';
import React from 'react';

const ActivityItem = ({ task }) => {
  return (
    <Auxiliary>
      <p className="kd-mb-0">{task.title}</p>
      {task.imageList.length > 0 ? (
        <ul className="kd-list-inline kd-mb-3 kd-mt-2">
          {task.imageList.map((image, index) => {
            if (index === 2) {
              return (
                <li className="kd-mb-1" key={index}>
                  <span className="kd-link kd-img-more">
                    {' '}
                    +{task.imageList.length - 2} More
                  </span>
                </li>
              );
            } else if (index > 2) {
              return null;
            } else {
              return (
                <li className="kd-mb-1" key={index}>
                  <Avatar shape="square" className="kd-size-40" src={image} />
                </li>
              );
            }
          })}
        </ul>
      ) : null}
    </Auxiliary>
  );
};

export default ActivityItem;
