import Widget from '@kongd/components/Widget';
import { Col, Row } from 'antd';
import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Page A', traffic: 200 },
  { name: 'Page B', traffic: 1100 },
  { name: 'Page C', traffic: 800 },
  { name: 'Page D', traffic: 1700 },
  { name: 'Page D', traffic: 600 },
  { name: 'Page D', traffic: 1800 },
  { name: 'Page D', traffic: 600 },
];

const TrafficRaiseCard = () => {
  return (
    <Widget>
      <Row className="kd-align-items-center">
        <Col lg={12} md={12} sm={24} xs={24}>
          <div className="kd-actchart kd-px-3">
            <h2 className="kd-fs-xxxl kd-font-weight-medium kd-mb-1 kd-text-black">
              07% <i className="icon icon-menu-up kd-fs-sm" />
            </h2>
            <p className="kd-mb-0">Traffic raise</p>
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <Tooltip />
              <Line dataKey="traffic" stroke="#038FDE" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Widget>
  );
};

export default TrafficRaiseCard;
