import React, { useState, useEffect } from "react";
import { Grid, GridCell, GridRow } from "@rmwc/grid";
import ConferenceDetails from "../components/conference-details/ConferenceDetails";
import AcceptanceRate from "../components/visualizations/AcceptanceRate";
import Keywords from "../components/visualizations/Keywords";
import WordCloud from "../components/visualizations/WordCloud";
import Papers from "../components/visualizations/Papers";
import axios from "axios";

const Conference = ({ id }) => {
  const [conference, setConference] = useState({});
  const [acceptanceRate, setAcceptanceRate] = useState({});
  const [loading, setLoading] = useState(false);

  const title = `${id} Acceptance Rate`;
  // console.log(conference);
  const fetchData = async () => {
    try {
      const conferenceUrl = `https://conference-viz-api.herokuapp.com/conference/${id}`;
      const acceptanceRateUrl = `https://conference-viz-api.herokuapp.com/conference/${id}/acceptance-rate`;

      const getConference = await axios.get(conferenceUrl);
      const getAcceptanceRate = await axios.get(acceptanceRateUrl);

      axios.all([getConference, getAcceptanceRate]).then(
        axios.spread((...responses) => {
          const conferenceResponse = responses[0].data;
          const acceptanceRateResponse = responses[1].data;
          //console.log(conferenceResponse);
          //console.log(acceptanceRateResponse);
          setConference(conferenceResponse);
          setAcceptanceRate(acceptanceRateResponse);
        })
      );
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Grid>
          <GridRow>
            <GridCell desktop={3} tablet={12} phone={12} className="card-cell">
              <ConferenceDetails conf={conference} />
            </GridCell>
            <GridCell desktop={4} tablet={12} phone={12} className="card-cell">
              <AcceptanceRate
                title={title}
                data={acceptanceRate.acceptanceRate}
              />
            </GridCell>
            <GridCell desktop={5} tablet={12} phone={12} className="card-cell">
              <WordCloud />
            </GridCell>
          </GridRow>
          <br />
          <GridRow>
            <GridCell desktop={4} tablet={12} phone={12}>
              <Keywords />
            </GridCell>
            <GridCell desktop={8} tablet={12} phone={12}>
              <Papers />
              <Papers />
              <Papers />
              <Papers />
            </GridCell>
          </GridRow>
        </Grid>
      ) : (
        <Grid>
          <GridCell>
            <h2>Loading...</h2>
          </GridCell>
        </Grid>
      )}
    </>
  );
};

export default Conference;
