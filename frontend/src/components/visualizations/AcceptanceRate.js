import React from "react";
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
  const { conference } = props;
  const { id, acceptanceRate } = conference;
  const { accepted, total } = buildData(id, acceptanceRate);
  return (
    <div>
      <h4>Acceptance Rate</h4>
      <DiscreteColorLegend
        orientation="horizontal"
        items={["Accepted", "Total"]}
      />
      <XYPlot
        xType="ordinal"
        margin={{ left: 56 }}
        width={420}
        height={315}
        animation={{ duration: 1000 }}
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
