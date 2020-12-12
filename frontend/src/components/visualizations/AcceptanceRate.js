import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Label,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/*
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];
*/

const AcceptanceRate = (props) => {
  const { title, data } = props;
  return (
    <div style={{ width: "100%", height: "300px" }}>
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

export default AcceptanceRate;

/*
import React from "react";
import ResponsiveOrdinalFrame from "semiotic/lib/ResponsiveOrdinalFrame";

const AcceptanceRate = (props) => {
  const { title, data } = props;

  const colorHash = {
    accepted: "#4C959A",
    total: "#79C7E3",
  };

  const rAccessor = ["accepted", "total"];

  const AcceptanceRateProps = {
    data: data,
    size: [280, 300],
    responsiveWidth: true,
    responsiveHeight: true,
    type: "bar",
    oPadding: 6,
    oAccessor: "year",
    rAccessor: rAccessor,
    style: (d) => {
      return {
        fill: colorHash[rAccessor[d.rIndex]],
        stroke: "white",
      };
    },
    title: { title },
    axes: [
      {
        orient: "left",
      },
    ],
    oLabel: true,
  };

  return (
    <div
      style={{
        height: "360px",
        padding: "1rem",
      }}
    >
      <ResponsiveOrdinalFrame {...AcceptanceRateProps} />
    </div>
  );
};

export default AcceptanceRate;
*/
