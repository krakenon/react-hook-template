import Widget from '@kongd/components/Widget';
import { Col, Row } from 'antd';
import React from 'react';

const DownloadMobileApps = () => {
  return (
    <Widget styleName="kd-pink-purple-gradient-reverse kd-text-white">
      <Row>
        <Col xl={16} lg={14} md={12} sm={12} xs={12}>
          <p>Download Mobile Apps</p>
          <h4 className="kd-font-weight-semi-bold kd-text-white kd-mb-0">
            Now, your account is on your fingers
          </h4>
        </Col>
        <Col xl={8} lg={10} md={12} sm={12} xs={12} className="kd-text-right">
          <div className="kd-flex-column kd-justify-content-center kd-h-100">
            <span className="kd-mb-2 kd-app-thumb">
              <img
                src={require('assets/images/dashboard/google.png')}
                alt="..."
              />
            </span>
            <span className="kd-app-thumb">
              <img
                src={require('assets/images/dashboard/apple.png')}
                alt="..."
              />
            </span>
          </div>
        </Col>
      </Row>
    </Widget>
  );
};

export default DownloadMobileApps;
