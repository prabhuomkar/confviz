import { useState, useEffect } from "react";
import axios from "axios";

const FetchConferences = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data.conferences);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    };
    fetchData();
  }, [url]);

  return { error, loading, data };
};

export default FetchConferences;
