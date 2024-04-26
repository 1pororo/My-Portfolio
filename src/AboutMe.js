import MyCarousel from "./MyCarousel";

const AboutMe = ({ aboutMe, section1 }) => {
  return (
    <div
      ref={section1}
      className="about-me-grid grid grid-cols-4 gap-2 mx-auto h-auto"
    >
      {aboutMe.map((obj) => {
        return (
          <div className="grid-item opacity-80 hover:opacity-100">
            <h2 className="text-xl text-center font-bold p-3 uppercase">
              {obj.title}
            </h2>
            <div className="justify-center flex">
              <MyCarousel slides={obj.images} />
            </div>
            <div className="text-sm max-w-56 pl-2 py-4">{obj.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutMe;
