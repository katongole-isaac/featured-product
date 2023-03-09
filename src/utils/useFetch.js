import { useEffect, useState } from "react";

export const BASE_URL = "http://3.7.252.58:4001/product/getAllProduct";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          limit: 100,
          search: "",
          page: 0,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          credentials: "same-origin",
        },
      });

      const result = await response.json();
      console.log("fetching done ...", result);
      setData(result);
      setLoading(false);
    } catch (ex) {
      console.log("error here", ex.message);
      setLoading(false);
      setError(ex);
    }
  };

  useEffect(() => {
    console.log('running')
    getData(url);
  }, []);

  return {
    isLoading,
    data,
    error,
  };
};

export { useFetch };
