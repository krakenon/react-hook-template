import Widget from '@kongd/components/Widget';
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Normal', value: 58 },
  { name: 'Height', value: 20 },
  { name: 'Critical', value: 8 },
  { name: 'Low', value: 15 },
];

const COLORS = ['#5797fc', '#FA8C16', '#f5222d', '#d9d9d9'];

const TaskByStatus = () => {
  return (
    <Widget
      title={
        <h2 className="h4 kd-text-capitalize kd-mb-0">Tickets by Status</h2>
      }
      styleName="kd-text-center"
    >
      <div className="kd-py-3">
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Tooltip />
            <text
              x="50%"
              className="h1"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              27
            </text>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={47}
              outerRadius={57}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Widget>
  );
};
export default TaskByStatus;
