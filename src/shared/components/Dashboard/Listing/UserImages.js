import Aux from '@kongd/components/Auxiliary';
import WidgetHeader from '@kongd/components/WidgetHeader';
import React from 'react';

const userImageList = [
  {
    id: 1,
    image: require('assets/images/avatar/alex-dolgove.png'),
    name: 'Alex Johns',
    rating: '5.0',
    deals: '27 Deals',
  },
  {
    id: 2,
    image: require('assets/images/avatar/chelsea-johns.jpg'),
    name: 'Chelsea Johns',
    rating: '4.5',
    deals: '21 Deals',
  },
  {
    id: 3,
    image: require('assets/images/avatar/domnic-brown.png'),
    name: 'Domnic Johns',
    rating: '5.0',
    deals: '27 Deals',
  },
  {
    id: 4,
    image: require('assets/images/avatar/ken-ramirez.jpg'),
    name: 'Ken Ramirez',
    rating: '5.0',
    deals: '27 Deals',
  },
  {
    id: 5,
    image: require('assets/images/avatar/zakie-chain.jpg'),
    name: 'Zakie Chain',
    rating: '5.0',
    deals: '27 Deals',
  },
];

const UserImages = () => {
  return (
    <Aux>
      <WidgetHeader
        styleName="kd-flex-row"
        title="Popular Agents"
        extra={
          <span>
            Go to agents list{' '}
            <i className="icon icon-long-arrow-right kd-fs-xxl kd-ml-2 kd-d-inline-flex kd-vertical-align-middle" />
          </span>
        }
      />

      <ul className="kd-agents-list">
        {userImageList.map((user, index) => (
          <li key={index}>
            <div className="kd-profileon kd-pointer">
              <div className="kd-profileon-thumb">
                <img alt="..." src={user.image} className="kd-rounded-lg" />
              </div>
              <div className="kd-profileon-content">
                <h5 className="kd-mb-1 kd-text-truncate">{user.name}</h5>
                <p className="kd-mb-0 kd-fs-sm kd-text-truncate">
                  <i className={`icon icon-star kd-text-orange kd-pr-1`} />{' '}
                  {user.rating} <span className="kd-px-sm-1">|</span>{' '}
                  {user.deals}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <span className="kd-text-primary kd-fs-md kd-pointer kd-mb-4 kd-d-block kd-d-sm-none">
        Go to agents list{' '}
        <i className="icon icon-long-arrow-right kd-fs-xxl kd-ml-2 kd-ml-2 kd-d-inline-flex kd-vertical-align-middle" />
      </span>
    </Aux>
  );
};

export default UserImages;
