import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import Details from "../components/details/Details";
import AcceptanceRateLSF from "../components/visualizations/acceptance-rate/AcceptanceRateLSF";
import AcceptanceRateLST from "../components/visualizations/acceptance-rate/AcceptanceRateLST";
import Keywords from "../components/visualizations/Keywords";
import Papers from "../components/papers/Papers";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import axios from "axios";

const Conference = ({ match }) => {
  const id = match.params.id;
  const CONFERENCE_URL = `https://confviz.herokuapp.com/conference/`;
  const [conference, setConference] = useState({});
  const [acceptanceRate, setAcceptanceRate] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (conferenceId) => {
    try {
      const getConference = await axios.get(`${CONFERENCE_URL}${conferenceId}`);
      const getAcceptanceRate = await axios.get(
        `${CONFERENCE_URL}${conferenceId}/acceptance-rate`
      );
      const getKeywords = await axios.get(
        `${CONFERENCE_URL}${conferenceId}/keywords`
      );
      const getPapers = await axios.get(
        `${CONFERENCE_URL}${conferenceId}/papers`
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
      setError(true);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <Grid>
          <GridRow>
            <GridCell
              desktop={6}
              tablet={12}
              phone={12}
              className="details-card"
            >
              <Details data={conference} />
            </GridCell>
            <GridCell
              desktop={6}
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
          </GridRow>
          <br />
          <GridRow>
            <GridCell
              desktop={5}
              tablet={12}
              phone={12}
              className="keywords-card"
            >
              <Keywords data={keywords} />
            </GridCell>
            <GridCell desktop={7} tablet={12} phone={12}>
              {papers.map((paper) => {
                const { title, authors, link, summary } = paper;
                return (
                  <Papers
                    key={title}
                    title={title}
                    authors={authors}
                    link={link}
                    summary={summary}
                  />
                );
              })}
            </GridCell>
          </GridRow>
        </Grid>
      ) : error ? (
        <Error />
      ) : (
        <Loading />
      )}
    </>
  );
};

Conference.propTypes = {
  match: PropTypes.string,
};

export default Conference;
