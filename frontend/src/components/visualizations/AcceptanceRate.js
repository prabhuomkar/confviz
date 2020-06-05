import React, { useState, useEffect, useRef } from "react";
import {
  XYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  DiscreteColorLegend,
} from "react-vis";
import utils from "../../utils";

const buildData = (id, acceptanceRate) => {
  if (utils.withLongAndShortPapers(id)) {
    return acceptanceRate.reduce(
      (res, aRate) => {
        res.accepted.push({
          x: aRate.year,
          y: aRate.long.accepted + aRate.short.accepted,
        });
        res.total.push({
          x: aRate.year,
          y: aRate.long.total + aRate.short.total,
        });
        return res;
      },
      { accepted: [], total: [] }
    );
  } else {
    return acceptanceRate.reduce(
      (res, aRate) => {
        res.accepted.push({ x: aRate.year, y: aRate.accepted });
        res.total.push({ x: aRate.year, y: aRate.total });
        return res;
      },
      { accepted: [], total: [] }
    );
  }
};

const AcceptanceRate = (props) => {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  const updateWidth = () =>
    setWidth(
      ref && ref.current ? ref.current.getBoundingClientRect().width : 0
    );

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { conference } = props;
  const { id, acceptanceRate } = conference;
  const { accepted, total } = buildData(id, acceptanceRate);

  return (
    <div style={{ width: "100%" }} ref={ref}>
      <h4 className="text-underline">Acceptance Rate</h4>
      <br />
      <DiscreteColorLegend
        orientation="horizontal"
        items={["Accepted", "Total"]}
      />
      <XYPlot
        xType="ordinal"
        margin={{ left: 56 }}
        width={width}
        height={(width * 1) / 2}
        animation={{ duration: 500 }}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={accepted} />
        <VerticalBarSeries data={total} />
      </XYPlot>
      <br />
      <br />
    </div>
  );
};

export default AcceptanceRate;
