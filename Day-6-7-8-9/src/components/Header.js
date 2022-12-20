import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h2>Avengers Github Details</h2>
      <Link to="/search">
        <span>Search Github users by Location</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
    </div>
  );
};

export default Header;
