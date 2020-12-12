import React from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import { LinearProgress } from "@rmwc/linear-progress";
import "@rmwc/linear-progress/styles";
import "./Loading.css";

const Loading = () => {
  return (
    <Grid>
      <GridRow>
        <GridCell desktop={12} phone={12} tablet={12} align="center">
          <center>
            <img
              src="/assets/loading.svg"
              alt="loading"
              width="335px"
              height="335px"
              align="center"
            />
            <LinearProgress className="loading" />
            <h3>Loading...</h3>
          </center>
        </GridCell>
      </GridRow>
    </Grid>
  );
};

export default Loading;
