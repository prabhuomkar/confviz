import React from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import "@rmwc/grid/styles";
import ConfDetails from "../components/ConfDetails/ConfDetails";
import AcceptanceRate from "../components/visualizations/AcceptanceRate";
import Keywords from "../components/visualizations/Keywords";
import WordCloud from "../components/visualizations/WordCloud";
import Papers from "../components/visualizations/Papers";

const ICLR = () => {
  const data = [
    { year: "2017", accepted: 198, total: 507 },
    { year: "2018", accepted: 314, total: 981 },
    { year: "2019", accepted: 500, total: 1591 },
    { year: "2020", accepted: 681, total: 2594 },
  ];
  const title = "ICLR Acceptance Rate";

  return (
    <Grid>
      <GridRow>
        <GridCell desktop={3} tablet={12} phone={12}>
          <ConfDetails />
        </GridCell>
        <GridCell desktop={4} tablet={12} phone={12}>
          <AcceptanceRate title={title} data={data} />
        </GridCell>
        <GridCell desktop={5} tablet={12} phone={12}>
          <WordCloud />
        </GridCell>
      </GridRow>
      <br />
      <GridRow>
        <GridCell desktop={4} tablet={12} phone={12}>
          <Keywords />
        </GridCell>
        <GridCell desktop={8} tablet={12} phone={12}>
          <Papers />
        </GridCell>
      </GridRow>
    </Grid>
  );
};

export default ICLR;
