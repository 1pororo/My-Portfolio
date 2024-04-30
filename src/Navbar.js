import { Link } from "react-router-dom";

const Navbar = () => {
  const navbar = document.querySelector("navbar-container");

  return (
    <header className="navbar-container fixed w-full max-w-5xl left-0 right-0 mx-auto z-50">
      <div className="navbar flex my-0 w-full mx-auto p-3 text-base items-center justify-between">
        <div className="branding ">
          <h1 className="font-bold text-lg ">Portfolio</h1>
        </div>
        <div className="links ml-auto">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/creatives">Creatives</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
