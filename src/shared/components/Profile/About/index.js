import Widget from '@kongd/components/Widget';
import { Col, Row, Tabs } from 'antd';
import React from 'react';

import { aboutList } from '../../../routes/socialApps/Profile/data';
import AboutItem from './AboutItem';

const TabPane = Tabs.TabPane;

const About = () => {
  return (
    <Widget
      title="About"
      styleName="kd-card-tabs kd-card-tabs-right kd-card-profile"
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Overview" key="1">
          <div className="kd-mb-2">
            <Row>
              {aboutList.map((about, index) => (
                <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={about} />
                </Col>
              ))}
            </Row>
          </div>
        </TabPane>
        <TabPane tab="Work" key="2">
          <div className="kd-mb-2">
            <Row>
              {aboutList.map((about, index) => (
                <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={about} />
                </Col>
              ))}
            </Row>
          </div>
        </TabPane>
        <TabPane tab="Education" key="3">
          <div className="kd-mb-2">
            <Row>
              {aboutList.map((about, index) => (
                <Col key={index} xl={8} lg={12} md={12} sm={12} xs={24}>
                  <AboutItem data={about} />
                </Col>
              ))}
            </Row>
          </div>
        </TabPane>
      </Tabs>
    </Widget>
  );
};

export default About;
