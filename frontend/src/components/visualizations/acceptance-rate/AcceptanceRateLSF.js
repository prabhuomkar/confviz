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

const AcceptanceRateLSF = ({ data }) => {
  return (
    <>
      <div style={{ width: "100%", height: "340px" }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="accepted" name="Accepted" fill="#79C7E3" />
            <Bar dataKey="total" name="Total" fill="#4C959A" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <center style={{ marginTop: "8px" }}>
        <small className="description">
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

AcceptanceRateLSF.propTypes = {
  data: PropTypes.string,
};

export default AcceptanceRateLSF;
