import "./styles.css";

const Header = ({ members }) => {
  return (
    <div className="heading">
      <h1>Welcome to Avengers Team List</h1>
      <h3>{`Total members : ${members}`}</h3>
    </div>
  );
};

export default Header;
