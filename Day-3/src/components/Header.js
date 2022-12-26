import "./Header.css";
import Logo from "../assets/react.svg";

const Header = () => {
  return (
    <div className="heading">
      <div>
        <img src={Logo} className="header-logo" />
      </div>

      <div>
        <input type="text" className="search-bar" placeholder="Search...." />
      </div>
      <div>
        <div className="header-profile">PJ</div>
      </div>
    </div>
  );
};

export default Header;
