import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', ADT: 2200, PHC: 3400 },
  { name: 'Tue', ADT: 1280, PHC: 2398 },
  { name: 'Wed', ADT: 5000, PHC: 4300 },
  { name: 'Thu', ADT: 4780, PHC: 2908 },
  { name: 'Fri', ADT: 5890, PHC: 4800 },
  { name: 'Sat', ADT: 4390, PHC: 3800 },
  { name: 'Sun', ADT: 4490, PHC: 4300 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ADT" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="PHC"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
