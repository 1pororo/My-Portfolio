import IconGrid from "./IconGrid";
import Introduction from "./Introduction";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/pages")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch");
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
      });
  }, []);

  return (
    <main className="home max-w-4xl w-full mx-auto my-0 px-3 scro">
      <Introduction />
      {data !== null && <IconGrid data={data} />}
    </main>
  );
};

export default Home;
