import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const AcceptanceRateLST = (props) => {
  const { data } = props;
  return (
    <div style={{ width: "100%", height: "320px" }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="long.accepted" stackId="a" fill="#79C7E3" />
          <Bar dataKey="long.total" stackId="a" fill="#4C959A" />
          <Bar dataKey="short.accepted" stackId="b" fill="#79C7E3" />
          <Bar dataKey="short.total" stackId="b" fill="#4C959A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AcceptanceRateLST;
