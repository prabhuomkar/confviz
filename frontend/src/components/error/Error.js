import React from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";

const Error = () => {
  return (
    <Grid>
      <GridRow>
        <GridCell span={12} className="card">
          <center>
            <img src="/assets/error.svg" alt="loading" width="35%" />
            <br />
            Error occured :(
          </center>
        </GridCell>
      </GridRow>
    </Grid>
  );
};

export default Error;
