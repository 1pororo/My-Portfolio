import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch");
        }
        return res.json();
      })
      .then((db) => {
        setData(db);
        console.log(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          setError(err.name);
        }
      });
  }, []);

  return { data, error };
};

export default useFetch;
