import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("HTTP error " + res.status);
        }
        return res.json();
      })
      .then((db) => {
        setData(db);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
        setError(err.name);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
