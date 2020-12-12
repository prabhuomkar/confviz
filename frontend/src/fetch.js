import axios from "axios";
import React, { useState, useEffect } from "react";

export const fetchData = async (conference_id) => {
  try {
    const conferenceUrl = `https://conference-viz-api.herokuapp.com/conference/${conference_id}`;
    const acceptanceRateUrl = `https://conference-viz-api.herokuapp.com/conference/${conference_id}/acceptance-rate`;
    const keywordsUrl = `https://conference-viz-api.herokuapp.com/conference/${conference_id}/keywords`;
    const papersUrl = `https://conference-viz-api.herokuapp.com/conference/${conference_id}/papers`;

    const getConference = await axios.get(conferenceUrl);
    const getAcceptanceRate = await axios.get(acceptanceRateUrl);
    const getKeywords = await axios.get(keywordsUrl);
    const getPapers = await axios.get(papersUrl);

    axios.all([getConference, getAcceptanceRate, getKeywords, getPapers]).then(
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

const fetch = () => {
  const [conference, setConference] = useState({});
  const [acceptanceRate, setAcceptanceRate] = useState({});
  const [keywords, setKeywords] = useState({});
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);

  return null;
};

export default fetch;
