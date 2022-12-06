import { useEffect, useState } from "react";

const GithubCard = ({ data }) => {
  const [teamData, setTeamData] = useState([]);
  console.log(data);

  useEffect(() => {
    displayUserData();
  }, []);

  const fetchUserData = async (url) => {
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

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

  return (
    <div className="card-container">
      {teamData.map((item) => {
        console.log(item.login);
        return (
          <div className="card-tag" key={item.id}>
            <img src={item.avatar_url} alt={`${item.name || item.login} img`} />
            <h1>{item.name || item.login}</h1>
            <h2 className="card-bio">{item.bio}</h2>
            <button
              onClick={() =>
                (location.href = `https://github.com/${item.login}?tab=repositories`)
              }
            >
              Checkout my work
            </button>
            <h3>Total Repos : {item.public_repos}</h3>
            <h3>Total Followers : {item.followers}</h3>
            <h3>
              {item.twitter_username && `Twitter : ${item.twitter_username}`}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default GithubCard;
