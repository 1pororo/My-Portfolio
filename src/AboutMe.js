import MyCarousel from "./MyCarousel";

const AboutMe = ({ aboutMe, section1 }) => {
  const images = aboutMe[2].images;

  return (
    <div
      ref={section1}
      className="about-me-grid grid grid-cols-4 gap-6 h-96 border"
    >
      <div className="items-center">
        <MyCarousel slides={images} />
      </div>
    </div>
  );
};

export default AboutMe;
