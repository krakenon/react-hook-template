import Widget from '@kongd/components/Widget';
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Page A', increment: 200 },
  { name: 'Page B', increment: 1000 },
  { name: 'Page C', increment: 600 },
  { name: 'Page D', increment: 1600 },
  { name: 'Page D', increment: 1000 },
  { name: 'Page H', increment: 2260 },
  { name: 'Page K', increment: 400 },
];

const IncreamentCard = () => {
  return (
    <Widget styleName="kd-card-full">
      <div className="kd-actchart kd-px-3 kd-pt-3 kd-pb-2 kd-d-flex kd-flex-row">
        <h2 className="kd-mb-0 kd-mr-2 kd-fs-lg">
          84% <i className="icon icon-menu-up kd-fs-sm" />
        </h2>
        <p className="kd-mb-0 kd-text-grey kd-fs-sm">
          Increment in Active users
        </p>
      </div>
      <ResponsiveContainer width="100%" height={60}>
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <Tooltip />
          <defs>
            <linearGradient id="color07" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#FF557F" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#6757DE" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <Area
            dataKey="increment"
            stackId="2"
            strokeWidth={0}
            stroke="#4D95F3"
            fill="url(#color07)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Widget>
  );
};

export default IncreamentCard;
