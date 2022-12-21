import React, { Component } from "react";
import { fetchUserData } from "../utils/fetchData";
import Loader from "./Loader";
import RepoCard from "./RepoCard";
import WithRouter from "./WithRouter";

class UserRepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRepos: [],
    };
    console.log("child - constructor");
  }

  componentDidMount() {
    console.log("child - componentDidMount");
    this.displayUserRepos();
  }

  async displayUserRepos() {
    const { userid } = this.props.params;
    const url = `https://api.github.com/users/${userid}/repos`;
    const userRepos = await fetchUserData(url);
    this.setState({ userRepos: userRepos });
  }
  render() {
    const { userRepos } = this.state;
    console.log("child - render");
    return (
      <div className="repo-container">
        <h1>My Repo List</h1>
        <div className="repo-list">
          {userRepos ? (
            userRepos.map((item) => {
              return <RepoCard card={item} />;
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default WithRouter(UserRepoList);
