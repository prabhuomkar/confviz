import React, { useEffect } from "react";
import { Grid, GridRow, GridCell } from "@rmwc/grid";
import WordCloud from "../components/visualizations/WordCloud";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import axios from "axios";
import useAxios from "axios-hooks";
import "@rmwc/grid/styles";

const Home = () => {
  /*
  const getData = async () => {
    try {
      const conferences = await axios.get(
        "https://conference-viz-api.herokuapp.com/conferences"
      );
      console.log(conferences.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  */
  const [{ data, loading, error }] = useAxios(
    "https://conference-viz-api.herokuapp.com/conferences"
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

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
      <WordCloud data={data.conferences} />
    </Grid>
  );
};

export default Home;
