import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchUserData } from "../utils/fetchData";
import Loader from "./Loader";
import RepoCard from "./RepoCard";
import ThemeContext from "./ThemeContext";

const UserCardInfo = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [userRepo, setuserRepo] = useState([]);
  useEffect(() => {
    displayUserInfo();
  }, [id]);

  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme);

  const displayUserInfo = async () => {
    const url = `https://api.github.com/users/${id}`;
    const userInfo = await fetchUserData(url);
    getUserRepo(userInfo.repos_url);
    setUserData([userInfo]);
  };

  const getUserRepo = async (url) => {
    const repoData = await fetchUserData(url);
    repoData.sort(function (a, b) {
      return b.stargazers_count - a.stargazers_count;
    });
    setuserRepo(repoData.slice(0, 5));
  };

  if (userRepo && userRepo.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="container">
        <div
          className={`user-container ${
            theme !== "dark" ? "light_mode" : "dark_mode"
          } `}
        >
          <img
            src={userData[0]?.avatar_url}
            alt="user_img"
            className="user-img"
          />
          <h1 className="user-title">{userData[0]?.login}</h1>
          <h3 className="user-bio">{userData[0]?.bio}</h3>

          <Link to={`/userprofile/${id}`}>
            <button>Know me</button>
          </Link>

          <h1 className="repo-title">My Top repositories</h1>

          {/* <button onClick={() => setTheme("light")}>Theme</button> */}

          <div className="repo-container">
            {userRepo &&
              userRepo.map((item) => {
                return <RepoCard card={item} key={item.id} />;
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default UserCardInfo;
