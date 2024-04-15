import { Link } from "react-router-dom";

const GridItem = () => {
  return (
    <div className="grid-item">
      <div className="icon-thumbnail">
        <Link to="/">
          <img src="" alt="HEY" />
        </Link>
      </div>
      <div className="icon-description">
        <Link to="/">
          <h3>Title</h3>
        </Link>
        <p>Description</p>
        <div className="icon-labels flex">labels of tech stack</div>
      </div>
    </div>
  );
};

export default GridItem;
