import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserData } from "../utils/fetchData";
import CardComponent from "./CardComponent";
import Loader from "./Loader";

const UserCard = ({ data }) => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    displayUserData();
  }, []);

  const displayUserData = () => {
    const output = [];
    data &&
      data.map(async (user) => {
        const url = `https://api.github.com/users/${user.username}`;
        const userData = await fetchUserData(url);
        output.push(userData);
        setTeamData([...teamData, ...output]);
      });
  };

  if (teamData && teamData.length === 0) return <Loader />;

  return (
    <div className="card-container">
      {teamData.map((item) => {
        return <CardComponent user={item} showLink />;
      })}
    </div>
  );
};

export default UserCard;
