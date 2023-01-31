import { Link } from "react-router-dom";

const CardComponent = ({ user, showLink = false, showAllRepos = false }) => {
  return (
    <div
      className="flex flex-col items-center space-between p-9 rounded-sm border-2 h-auto bg-transparent"
      key={user.id}
    >
      <img
        src={user.avatar_url}
        alt={`${user.name || user.login}`}
        className="h-36 w-36 object-cover rounded-full border-2 mb-5"
      />
      <h1>{user.name || user.login}</h1>
      <h2 className="text-sm w-60 text-center mb-6">
        {user.bio || "Developer"}
      </h2>
      <h3>Total Repos : {user.public_repos}</h3>
      <h3>Total Followers : {user.followers}</h3>
      <h3>Location : {user.location || "Need to Update"}</h3>
      <h3>I work at : {user.company || "Need to update"}</h3>

      {showLink && (
        <Link to={`/user/${user.login}`}>
          <button className="border-none outline-none h-7 p-1 mb-2 mt-5 rounded-md text-md font-medium cursor-pointer bg-yellow-300 text-black text-center">
            Click here to get Github Info
          </button>
        </Link>
      )}
      {showAllRepos && (
        <Link to={`/userprofile/${user.login}/allrepos`}>
          <button className="border-none outline-none h-7 p-1 mb-2 mt-5 rounded-md text-md font-medium cursor-pointer bg-yellow-300 text-black text-center">
            Show All Repos
          </button>
        </Link>
      )}
    </div>
  );
};

export default CardComponent;
