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

const AcceptanceRateLSF = (props) => {
  const { data } = props;
  return (
    <div style={{ width: "100%", height: "320px" }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="accepted" fill="#79C7E3" />
          <Bar dataKey="total" fill="#4C959A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AcceptanceRateLSF;
