import React from "react";
import { Card } from "@rmwc/card";
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
    oPadding: 5,
    oAccessor: "year",
    rAccessor: rAccessor,
    style: (d) => {
      return { fill: colorHash[rAccessor[d.rIndex]], stroke: "white" };
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
