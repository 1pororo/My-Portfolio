import MyCarousel from "./MyCarousel";

const AboutMe = ({ aboutMe, section1 }) => {
  return (
    <div
      ref={section1}
      className="about-me-grid grid grid-cols-4 gap-2 mx-auto h-auto m-24"
    >
      <h1 className="text-3xl font-bold uppercase col-span-1 text-slate-800 pt-4">
        About me! ⤵️
      </h1>
      <p className="col-span-4 pb-4 text-slate-800 flex items-center">
        Nice to meet you! Learn more about my hobbies and personal hopes
      </p>
      {aboutMe.map((obj) => {
        const description = obj.description;
        const contentList = (
          <ul className="px-4 pb-3">
            {description.map((line, index) => {
              return (
                <li key={"list_" + index} className="my-2">
                  {line}
                </li>
              );
            })}
          </ul>
        );

        return (
          <div className="grid-item flex justify-center flex-wrap opacity-80 hover:opacity-100">
            <div className="carousel-container border-2 rounded-lg max-w-56 hover:max-w-60 overflow-hidden  min-h-full">
              <MyCarousel slides={obj.images} />

              <h2 className="text-xl text-center font-bold pt-3">
                {obj.title}
              </h2>
              <div className="max-w-56 text-sm">{contentList}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutMe;
