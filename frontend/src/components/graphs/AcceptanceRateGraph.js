import React from "react";
import ResponsiveOrdinalFrame from "semiotic/lib/ResponsiveOrdinalFrame";

const AcceptanceRateGraph = (props) => {
  const { title, data } = props;

  const colorHash = {
    accepted: "#4C959A",
    total: "#79C7E3",
  };

  const rAccessor = ["accepted", "total"];

  const AcceptanceRateProps = {
    data: data,
    size: [280, 300],
    type: "clusterbar",
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
    <ResponsiveOrdinalFrame
      responsiveWidth={true}
      responsiveHeight={true}
      {...AcceptanceRateProps}
    />
  );
};

export default AcceptanceRateGraph;
