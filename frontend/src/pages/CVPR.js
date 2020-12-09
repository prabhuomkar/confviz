import React from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import "@rmwc/grid/styles";
import Conference from "../components/Conference/Conference";

const CVPR = () => {
  return (
    <Grid>
      <GridRow>
        <GridCell desktop={3} tablet={12} phone={12}>
          <Conference id="CVPR" />
        </GridCell>
      </GridRow>
    </Grid>
  );
};

export default CVPR;
