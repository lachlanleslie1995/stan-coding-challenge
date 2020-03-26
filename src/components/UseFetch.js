import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = url => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setResponse({});
    setError(null);

    const fetchUrl = async () => {
      try {
        const response = await axios.get(url);
        setResponse(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, [url]);

  return [response, loading, error];
};

export default useFetch;
