import { Link } from "react-router-dom";

const IconGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-10 ">
      {data.map((icon) => {
        return (
          <div className="icon-details" key={icon.id}>
            <div className="icon-thumbnail">
              <Link to={`/${icon.title}`}>
                <img src={icon.src} alt="ICON" />
              </Link>
            </div>
            <div className="icon-description">
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
