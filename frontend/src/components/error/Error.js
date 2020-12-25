import React from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";

const Error = () => {
  return (
    <Grid>
      <GridRow>
        <GridCell span={12}>
          <center>
            <img
              src="/assets/error.svg"
              alt="loading"
              width="320px"
              height="320px"
            />
            <p>Error occured :(</p>
          </center>
        </GridCell>
      </GridRow>
    </Grid>
  );
};

export default Error;
