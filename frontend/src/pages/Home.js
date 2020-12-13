import React from "react";
import { Grid, GridRow, GridCell } from "@rmwc/grid";
import { List, ListDivider } from "@rmwc/list";
import WordCloud from "../components/visualizations/WordCloud";
import "@rmwc/card/styles";
import "@rmwc/grid/styles";

const Home = () => {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridCell desktop={8} phone={6} tablet={7} align="middle">
            <h1>conference-viz</h1>
            <p>
              Statistics, Paper Links and Visualizations of Machine Learning
              Conferences
            </p>
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell desktop={4} phone={12} tablet={12} className="card">
            <img src="/assets/word_cloud.jpg" alt="word_cloud" width="100%" />
            <p>WordCloud Title</p>
            <p className="description">WordCloud description</p>
          </GridCell>
          <GridCell desktop={4} phone={12} tablet={12} className="card">
            <img src="/assets/word_cloud.jpg" alt="word_cloud" width="100%" />
            <p>WordCloud Title</p>
            <p className="description">WordCloud description</p>
          </GridCell>
          <GridCell desktop={4} phone={12} tablet={12} className="card">
            <img src="/assets/word_cloud.jpg" alt="word_cloud" width="100%" />
            <p>WordCloud Title</p>
            <p className="description">WordCloud description</p>
          </GridCell>
        </GridRow>
      </Grid>
    </div>
  );
};

export default Home;
