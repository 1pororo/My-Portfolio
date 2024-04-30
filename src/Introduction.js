import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Introduction = ({ section1 }) => {
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 50,
      behavior: "smooth",
    });
  };

  return (
    <div className="intro pt-32 pb-20">
      <h1 className="text-6xl font-name inline-block">H. Esteban</h1>
      <button
        onClick={() => scroll(section1)}
        className="mx-3 hover:bg-slate-100 text-2xl hover:text-3xl hover:leading-none transition-all hover:rounded-full"
      >
        <FontAwesomeIcon icon="angles-down" className=" p-3 px-1 mx-3" />
      </button>
      <p className="py-3 text-2xl">A collection of who I am as a developer</p>
    </div>
  );
};

export default Introduction;
