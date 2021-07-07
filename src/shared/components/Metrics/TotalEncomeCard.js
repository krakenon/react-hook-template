import Widget from '@kongd/components/Widget';
import { Col, Row } from 'antd';
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import { trafficData } from '../../routes/main/Metrics/data';

const TotalEncomeCard = () => {
  return (
    <Widget styleName={`kd-card-full`}>
      <div className="kd-d-flex kd-px-4 kd-pt-4 kd-pb-2">
        <p className="kd-text-uppercase kd-chart-title">income last year</p>
        <p className="kd-ml-auto kd-text-primary">
          67% <i className="icon icon-menu-up kd-fs-sm" />
        </p>
      </div>
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <div className="kd-actchart kd-pb-5 kd-pl-4">
            <h2 className="kd-fs-xxxl kd-font-weight-medium kd-mb-1 kd-text-black">
              $23,658
            </h2>
            <p className="kd-mb-0">Total income</p>
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <ResponsiveContainer width="100%" height={80}>
            <AreaChart
              data={trafficData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <Tooltip />
              <defs>
                <linearGradient id="color1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="5%" stopColor="#FF55AA" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#E81D27" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <Area
                dataKey="income"
                strokeWidth={0}
                stackId="2"
                stroke="#867AE5"
                fill="url(#color1)"
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Widget>
  );
};

export default TotalEncomeCard;
