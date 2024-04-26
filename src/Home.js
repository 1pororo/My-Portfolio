import AboutMe from "./AboutMe";
import IconGrid from "./IconGrid";
import Introduction from "./Introduction";
import useFetch from "./useFetch";
import { useRef } from "react";

const Home = () => {
  const { data: pages } = useFetch(`http://localhost:2000/pages`);
  const { data: aboutMe } = useFetch(`http://localhost:2000/aboutMe`);

  const section1 = useRef(null);

  return (
    <main className="home max-w-5xl w-full mx-auto my-0 px-3">
      <Introduction section1={section1} />
      {pages !== null && <IconGrid pages={pages} />}
      <h1 className="text-3xl font-bold">Get to know me!</h1>
      {aboutMe !== null && <AboutMe aboutMe={aboutMe} section1={section1} />}
    </main>
  );
};

export default Home;
