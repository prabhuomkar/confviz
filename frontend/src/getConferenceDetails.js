import { useState, useEffect } from "react";
import axios from "axios";

const getConferencesDetails = (id, url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((response) => {
          setLoading(true);
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchData();
  }, [id, url]);

  return { error, loading, data };
};

export default getConferencesDetails;
