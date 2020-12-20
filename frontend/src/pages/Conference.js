import React, { useState, useEffect } from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import Details from "../components/details/Details";
import AcceptanceRateLSF from "../components/visualizations/acceptance-rate/AcceptanceRateLSF";
import AcceptanceRateLST from "../components/visualizations/acceptance-rate/AcceptanceRateLST";
import Keywords from "../components/visualizations/Keywords";
import Papers from "../components/papers/Papers";
import Loading from "../components/loading/Loading";
import axios from "axios";

const Conference = ({ id }) => {
  const [conference, setConference] = useState({});
  const [acceptanceRate, setAcceptanceRate] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (conf_id) => {
    try {
      const getConference = await axios.get(
        `https://conference-viz-api.herokuapp.com/conference/${conf_id}`
      );
      const getAcceptanceRate = await axios.get(
        `https://conference-viz-api.herokuapp.com/conference/${conf_id}/acceptance-rate`
      );
      const getKeywords = await axios.get(
        `https://conference-viz-api.herokuapp.com/conference/${conf_id}/keywords`
      );
      const getPapers = await axios.get(
        `https://conference-viz-api.herokuapp.com/conference/${conf_id}/papers`
      );

      axios
        .all([getConference, getAcceptanceRate, getKeywords, getPapers])
        .then(
          axios.spread((...responses) => {
            const conferenceResponse = responses[0].data;
            const acceptanceRateResponse = responses[1].data;
            const keywordsResponse = responses[2].data.keywords;
            const papersResponse = responses[3].data.papers;
            setConference(conferenceResponse);
            setAcceptanceRate(acceptanceRateResponse);
            setKeywords(keywordsResponse);
            setPapers(papersResponse);
          })
        );
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <>
      {loading ? (
        <Grid>
          <GridRow>
            <GridCell
              desktop={3}
              tablet={12}
              phone={12}
              className="details-card"
            >
              <Details conf={conference} />
            </GridCell>
            <GridCell
              desktop={4}
              tablet={12}
              phone={12}
              className="acceptance-rate-card"
            >
              {acceptanceRate.containsLongShort ? (
                <AcceptanceRateLST data={acceptanceRate.acceptanceRate} />
              ) : (
                <AcceptanceRateLSF data={acceptanceRate.acceptanceRate} />
              )}
            </GridCell>
            <GridCell
              desktop={5}
              tablet={12}
              phone={12}
              className="card-cell"
            ></GridCell>
          </GridRow>
          <br />
          <GridRow>
            <GridCell desktop={5} tablet={12} phone={12} className="card-cell">
              <Keywords data={keywords} />
            </GridCell>
            <GridCell desktop={7} tablet={12} phone={12}>
              {papers.map((paper) => {
                return (
                  <Papers
                    key={paper.title}
                    title={paper.title}
                    authors={paper.authors}
                    link={paper.link}
                    summary={paper.summary}
                  />
                );
              })}
            </GridCell>
          </GridRow>
        </Grid>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Conference;
