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

const AcceptanceRateLST = ({ data }) => {
  return (
    <>
      <div style={{ width: "100%", height: "340px" }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="long.accepted"
              name="Long Accepted"
              stackId="a"
              fill="#79C7E3"
            />
            <Bar
              dataKey="long.total"
              name="Long Total"
              stackId="a"
              fill="#4C959A"
            />
            <Bar
              dataKey="short.accepted"
              name="Short Accepted"
              stackId="b"
              fill="#79C7E3"
            />
            <Bar
              dataKey="short.total"
              name="Short Total"
              stackId="b"
              fill="#4C959A"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <center style={{ marginTop: "8px" }}>
        <small>
          Data collected via{" "}
          <i>
            <a
              href="https://github.com/lixin4ever/Conference-Acceptance-Rate"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/lixin4ever/Conference-Acceptance-Rate
            </a>
          </i>
        </small>
      </center>
    </>
  );
};

AcceptanceRateLST.propTypes = {
  data: PropTypes.string,
};

export default AcceptanceRateLST;
