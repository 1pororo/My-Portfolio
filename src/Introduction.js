import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Introduction = ({ section1 }) => {
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 70,
      behavior: "smooth",
    });
    console.log(ref);
  };

  return (
    <div className="intro pt-32 pb-20">
      <h1 className="text-6xl font-name inline-block">H. Esteban</h1>
      <button onClick={() => scroll(section1)}>
        <FontAwesomeIcon
          icon="angles-down"
          className="text-2xl hover:text-3xl hover:leading-none transition-all hover:text-amber-600 p-3 mx-3"
        />
      </button>
      <p className="py-3 text-2xl">A collection of who I am as a developer</p>

      <div className="pt-96 mt-96">blank</div>
      <div className="pt-96 mt-96">HEre here</div>
    </div>
  );
};

export default Introduction;
