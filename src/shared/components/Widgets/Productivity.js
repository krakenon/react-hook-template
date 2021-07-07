import Widget from '@kongd/components/Widget';
import { Avatar } from 'antd';
import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', price: 200 },
  { name: 'Page B', price: 800 },
  { name: 'Page C', price: 600 },
  { name: 'Page D', price: 2200 },
  { name: 'Page D', price: 1000 },
  { name: 'Page H', price: 2960 },
  { name: 'Page K', price: 1960 },
];

const Productivity = () => {
  return (
    <Widget
      styleName="kd-card-full"
      extra={<i className="icon icon-setting kd-text-grey kd-fs-xl" />}
    >
      <div className="kd-text-center kd-px-3 kd-pt-3">
        <div className="kd-d-flex kd-justify-content-around kd-align-items-center kd-mb-3">
          <i className="icon icon-chart kd-fs-xxl kd-text-grey" />
          <Avatar
            className="kd-size-80"
            src={'https://via.placeholder.com/150x150'}
          />
          <i className="icon icon-chat kd-fs-xxl kd-text-grey" />
        </div>
        <div className="kd-mb-3">
          <h2>Christina Johnson</h2>
          <p className="kd-text-grey">Crypto Expert</p>
        </div>
      </div>
      <div className="kd-rechart">
        <div className="kd-rechart-prod">
          <div className="kd-d-flex kd-flex-row">
            <i className="icon icon-menu-up kd-text-geekblue kd-mr-2 kd-pt-1" />
            <h2 className="kd-text-geekblue">38%</h2>
          </div>
          <p className="kd-text-left kd-text-grey">Productivity</p>
        </div>
        <ResponsiveContainer width="100%" height={118}>
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Area
              type="monotone"
              dataKey="price"
              stackId="2"
              stroke="#4D95F3"
              fill="#038FDE"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Widget>
  );
};

export default Productivity;
