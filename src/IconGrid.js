import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconGrid = ({ pages }) => {
  return (
    <div className="icon-grid grid grid-cols-2 gap-10 mb-40 ">
      {pages.map((icon) => {
        return (
          <div
            className="icon-details text-center border rounded-xl"
            key={icon.id}
          >
            <Link to={`/${icon.title}`}>
              <div className="icon-thumbnail bg-slate-100 rounded-t-xl ">
                <FontAwesomeIcon
                  icon={icon.id === "1" ? "laptop-file" : "address-book"}
                  className="icon text-7xl transition-all m-16"
                />
              </div>
            </Link>
            <div className="icon-description text-left p-4 text-base text-slate-900">
              <Link to={`/${icon.title}`}>
                <h2 className="text-lg font-semibold">
                  {icon.title + icon.emoji}
                </h2>
              </Link>
              <p className="pt-2">{icon.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconGrid;
