import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import "@rmwc/grid/styles";

const Home = () => {
  return (
    <div>
      <Grid>
        <GridCell desktop={8} phone={6} tablet={7} align="middle">
          <h1>conference-viz</h1>
          <p>
            Statistics, Paper Links and Visualizations of Machine Learning
            Conferences
          </p>
        </GridCell>
      </Grid>
    </div>
  );
};

export default Home;
