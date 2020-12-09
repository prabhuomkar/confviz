import React, { useState, useEffect } from "react";
import axios from "axios";

const Conference = ({ id }) => {
  const [conference, setConference] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      await axios
        .get(`https://conference-viz-api.herokuapp.com/conference/${id}`)
        .then((res) => {
          setConference(res.data);
        });
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
        <div>
          <h2>{conference.id}</h2>
          <p>{conference.name}</p>
          <p>{conference.description}</p>
          <p>
            Website : <a href={conference.website}>{conference.website}</a>
          </p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Conference;
