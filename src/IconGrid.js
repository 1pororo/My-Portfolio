import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconGrid = ({ data }) => {
  return (
    <div className="icon-grid grid grid-cols-2 gap-10">
      {data.map((icon) => {
        return (
          <div
            className="icon-details text-center border rounded-xl"
            key={icon.id}
          >
            <div className="icon-thumbnail bg-slate-200 rounded-t-xl">
              <Link to={`/${icon.title}`}>
                <FontAwesomeIcon
                  icon={icon.id === "1" ? "laptop-file" : "address-book"}
                  className="icon text-7xl transition-all m-16"
                />
              </Link>
            </div>
            <div className="icon-description text-left">
              <Link to="/">
                <h3>{icon.title}</h3>
              </Link>
              <p>{icon.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconGrid;
