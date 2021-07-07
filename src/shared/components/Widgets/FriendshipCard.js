import Widget from '@kongd/components/Widget';
import { Col, Row } from 'antd';
import React from 'react';

const FriendshipCard = () => {
  return (
    <Widget styleName="kd-p-lg-1">
      <Row>
        <Col xl={9} lg={10} md={10} sm={10} xs={24}>
          <img
            className="kd-rounded-lg kd-w-100"
            alt="..."
            src={'https://via.placeholder.com/392x470'}
          />
        </Col>
        <Col xl={15} lg={14} md={14} sm={14} xs={24}>
          <div className="kd-fnd-content">
            <p className="kd-text-grey">Outdoor Experience</p>
            <h2 className="kd-text-uppercase kd-text-black kd-font-weight-bold kd-fnd-title">
              A Friendship with high waves
            </h2>
            <p>Had a great time with family on beach this weekend.</p>
            <ul className="kd-fnd-gallery-list">
              <li>
                <img
                  alt="..."
                  src={'https://via.placeholder.com/70x70'}
                  className="kd-rounded-lg kd-img-fluid"
                />
              </li>
              <li>
                <img
                  alt="..."
                  src={'https://via.placeholder.com/70x70'}
                  className="kd-rounded-lg kd-img-fluid"
                />
              </li>
              <li>
                <img
                  alt="..."
                  src={'https://via.placeholder.com/70x70'}
                  className="kd-rounded-lg kd-img-fluid"
                />
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Widget>
  );
};

export default FriendshipCard;
