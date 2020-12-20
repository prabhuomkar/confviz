import React from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import { LinearProgress } from "@rmwc/linear-progress";
import "@rmwc/linear-progress/styles";
import "./Loading.css";

const Loading = () => {
  return (
    <Grid>
      <GridRow>
        <GridCell span={12}>
          <center>
            <img
              src="/assets/loading.svg"
              alt="loading"
              width="320px"
              height="320px"
            />
            <LinearProgress className="loading" />
          </center>
        </GridCell>
      </GridRow>
    </Grid>
  );
};

export default Loading;
