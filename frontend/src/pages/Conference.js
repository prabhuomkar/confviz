import React from "react";
import PropTypes from "prop-types";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import FetchConferenceDetails from "../fetch/FetchConferenceDetails";
import Details from "../components/details/Details";
import AcceptanceRateLSF from "../components/visualizations/acceptance-rate/AcceptanceRateLSF";
import AcceptanceRateLST from "../components/visualizations/acceptance-rate/AcceptanceRateLST";
import Keywords from "../components/visualizations/Keywords";
import Papers from "../components/papers/Papers";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

const Conference = ({ match }) => {
  const CONFERENCE_URL = "https://confviz.herokuapp.com/conference/";
  const CONFERENCE_ID = match.params.id;
  const {
    conference,
    acceptanceRate,
    keywords,
    papers,
    loading,
    error,
  } = FetchConferenceDetails(CONFERENCE_URL, CONFERENCE_ID);

  if (error) return <Error />;
  if (loading) return <Loading />;

  return (
    <Grid>
      <GridRow>
        <GridCell desktop={6} tablet={12} phone={12} className="details-card">
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
        <GridCell desktop={5} tablet={12} phone={12} className="keywords-card">
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
  );
};

Conference.propTypes = {
  match: PropTypes.string,
};

export default Conference;
