import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({
  user,
  showLink = false,
  showAllRepos = false,
  key,
}) => {
  console.log(user);
  return (
    <div>
      <div className="card-tag" key={key}>
        <img src={user.avatar_url} alt={`${user.name || user.login} img`} />
        <h1>{user.name || user.login}</h1>
        <h2 className="card-bio">{user.bio || "Developer"}</h2>
        <h3>Total Repos : {user.public_repos}</h3>
        <h3>Total Followers : {user.followers}</h3>
        <h3>Location : {user.location || "Need to Update"}</h3>
        <h3>I work at : {user.company || "Need to update"}</h3>

        {showLink && (
          <Link to={`/user/${user.login}`}>
            <button>Click here to get Github Info</button>
          </Link>
        )}
        {showAllRepos && (
          <Link to={`/userprofile/${user.login}/allrepos`}>
            <button>Show All Repos</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
