import React from "react";
import PropTypes from "prop-types";
import { Grid, GridRow, GridCell } from "@rmwc/grid";
import WordCloud from "../components/visualizations/WordCloud";
import "@rmwc/grid/styles";

const Home = ({ data }) => {
  return (
    <Grid>
      <GridRow>
        <GridCell span={12}>
          <h1>confviz</h1>
          <p>
            Statistics, Paper Links and Visualizations of Machine Learning
            Conferences
          </p>
        </GridCell>
      </GridRow>
      <WordCloud data={data} />
    </Grid>
  );
};

Home.propTypes = {
  data: PropTypes.array,
};

export default Home;
