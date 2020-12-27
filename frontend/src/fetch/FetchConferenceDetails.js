import { useState, useEffect } from "react";
import axios from "axios";

const FetchConferenceDetails = (url, id) => {
  const [conference, setConference] = useState({});
  const [acceptanceRate, setAcceptanceRate] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getConference = await axios.get(`${url}${id}`);
        const getAcceptanceRate = await axios.get(
          `${url}${id}/acceptance-rate`
        );
        const getKeywords = await axios.get(`${url}${id}/keywords`);
        const getPapers = await axios.get(`${url}${id}/papers`);
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
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    setLoading(true);
    fetchData();
  }, [id]);

  return { conference, acceptanceRate, keywords, papers, loading, error };
};

export default FetchConferenceDetails;
