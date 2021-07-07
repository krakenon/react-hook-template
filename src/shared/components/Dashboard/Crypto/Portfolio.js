import Widget from '@kongd/components/Widget';
import { Button, Col, Row } from 'antd';
import React from 'react';

import LineIndicator from './LineIndicator';

const Portfolio = () => {
  return (
    <Widget>
      <h2 className="h4 kd-mb-3">Your Portfolio Balance</h2>
      <Row>
        <Col lg={12} md={12} sm={12} xs={24}>
          <div className="ant-row-flex">
            <h2 className="kd-mr-2 kd-mb-0 kd-fs-xxxl kd-font-weight-medium">
              $179,626
            </h2>
            <h4 className="kd-pt-2 kd-chart-up">
              64% <i className="icon icon-menu-up kd-fs-sm" />
            </h4>
          </div>
          <p className="kd-text-grey">Overall balance</p>
          <div className="ant-row-flex kd-mb-3 kd-mb-md-2">
            <Button className="kd-mr-2" type="primary">
              Deposit
            </Button>
            <Button className="kd-btn-cyan">Withdraw</Button>
          </div>

          <p className="kd-text-primary kd-pointer kd-d-none kd-d-sm-block kd-mb-1">
            <i className="icon icon-add-circle kd-fs-lg kd-d-inline-flex kd-vertical-align-middle" />{' '}
            Add New Wallet
          </p>
        </Col>
        <Col lg={12} md={12} sm={12} xs={24}>
          <div className="kd-site-dash">
            <h5 className="kd-mb-3">Portfolio Distribution</h5>
            <ul className="kd-line-indicator kd-fs-sm kd-pb-1 kd-pb-sm-0">
              <li>
                <LineIndicator
                  width="78%"
                  title="BTC"
                  title2="8.74"
                  color="primary"
                  value="78%"
                />
              </li>
              <li>
                <LineIndicator
                  width="38%"
                  title="RPL"
                  title2="1.23"
                  color="pink"
                  value="48%"
                />
              </li>
              <li>
                <LineIndicator
                  width="24%"
                  title="LTE"
                  title2="0.71"
                  color="orange"
                  value="34%"
                />
              </li>
            </ul>
            <p className="kd-text-primary kd-pointer kd-d-block kd-d-sm-none kd-mb-0 kd-mt-3">
              <i className="icon icon-add-circle kd-fs-lg kd-d-inline-flex kd-vertical-align-middle" />{' '}
              Add New Wallet
            </p>
          </div>
        </Col>
      </Row>
    </Widget>
  );
};

export default Portfolio;
