// import AboutMeColumns from "./AboutMeColumn";

const AboutMe = ({ aboutMe, section1 }) => {
  console.log(aboutMe[1]);
  return (
    <div
      ref={section1}
      className="about-me-grid grid grid-cols-4 gap-6 h-96 border"
    >
      hello
    </div>
  );
};

export default AboutMe;
