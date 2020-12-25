import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Keywords = ({ data }) => {
  return (
    <div style={{ width: "100%", height: "640px" }}>
      <ResponsiveContainer>
        <BarChart data={data} layout="vertical" margin={{ left: 60 }}>
          <XAxis type="number" />
          <YAxis type="category" dataKey="keyword" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="Keyword count" fill="#4c959a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

Keywords.propTypes = {
  data: PropTypes.string,
};

export default Keywords;
