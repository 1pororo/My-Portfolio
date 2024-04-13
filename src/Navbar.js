import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex max-w-4xl mx-auto my-0 p-3 text-base items-center">
      <div className="branding">
        <h1 className="font-bold text-lg">Portfolio</h1>
      </div>
      <div className="links ml-auto">
        <Link to="/">Home</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
