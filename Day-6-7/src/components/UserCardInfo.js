import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchUserData } from "../utils/fetchData";

const UserCardInfo = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);
  const [userRepo, setuserRepo] = useState([]);
  console.log(id);
  useEffect(() => {
    displayUserInfo();
  }, [id]);

  const displayUserInfo = async () => {
    const url = `https://api.github.com/users/${id}`;
    const userInfo = await fetchUserData(url);
    console.log(userInfo);
    getUserRepo(userInfo.repos_url);
    setUserData([userInfo]);
  };

  const getUserRepo = async (url) => {
    const repoData = await fetchUserData(url);
    console.log(repoData);
    repoData.sort(function (a, b) {
      return b.stargazers_count - a.stargazers_count;
    });
    setuserRepo(repoData.slice(0, 5));
  };

  console.log(userRepo);

  if (userRepo && userRepo.length === 0) {
    return <div className="loader">Loading....</div>;
  } else {
    return (
      <div className="user-container">
        <img
          src={userData[0]?.avatar_url}
          alt="user_img"
          className="user-img"
        />
        <h1 className="user-title">{userData[0]?.login}</h1>
        <h3 className="user-bio">{userData[0]?.bio}</h3>

        <h1 className="repo-title">My Top repositories</h1>

        <div className="repo-container">
          {userRepo &&
            userRepo.map((item) => {
              return (
                <div className="repo-item">
                  <h2>{item.name}</h2>
                  <span>☆ {item.stargazers_count}</span>
                  {/* <span>Forks : 1</span> */}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
};

export default UserCardInfo;
