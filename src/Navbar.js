import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed w-full max-w-5xl left-0 right-0 mx-auto">
      <div className="navbar flex my-0 w-full mx-auto p-3 text-base items-center justify-between">
        <div className="branding ">
          <h1 className="font-bold text-lg ">Portfolio</h1>
        </div>
        <div className="links ml-auto">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
