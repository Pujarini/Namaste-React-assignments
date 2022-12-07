import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserData } from "../utils/fetchData";

const UserCard = ({ data }) => {
  const [teamData, setTeamData] = useState([]);

  console.log(data);

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

  console.log(teamData);

  if (teamData && teamData.length === 0)
    return <div className="loader"> Loading...</div>;

  return (
    <div className="card-container">
      {teamData.map((item) => {
        return (
          <div className="card-tag" key={item.id}>
            <img src={item.avatar_url} alt={`${item.name || item.login} img`} />
            <h1>{item.name || item.login}</h1>
            <h2 className="card-bio">{item.bio || "Developer"}</h2>
            <h3>Total Repos : {item.public_repos}</h3>
            <h3>Total Followers : {item.followers}</h3>
            <Link to={`/user/${item.login}`}>
              <button>Click here to get Github Info</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
