import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid stroke="#e0dfdf" />}
          <XAxis dataKey="name" stroke="#555051" strokeDasharray="5 5" />
          {/* <YAxis /> */}
          <Line
            type="monotone"
            stroke="#8884d8"
            dataKey={dataKey}
            activeDot={{ r: 8 }}
          />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
