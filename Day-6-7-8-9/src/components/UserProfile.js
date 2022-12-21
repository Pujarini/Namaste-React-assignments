import React, { Component } from "react";
import { Outlet } from "react-router";
import { fetchUserData } from "../utils/fetchData";
import CardComponent from "./CardComponent";
import ThemeContext from "./ThemeContext";
import WithRouter from "./WithRouter";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
    };
    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log("parent - componentDidMount");
    this.displayUserInfo();
  }

  async displayUserInfo() {
    const { userid } = this.props.params;
    const url = `https://api.github.com/users/${userid}`;
    const userInfo = await fetchUserData(url);
    this.setState({ userDetails: userInfo });
  }

  render() {
    const { userDetails } = this.state;
    console.log("parent - render");
    return (
      <ThemeContext.Consumer>
        {({ theme }) => {
          return (
            <div className={theme === "dark" ? "dark_mode" : "light_mode"}>
              <CardComponent user={userDetails} showLink={false} showAllRepos />
              <Outlet />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default WithRouter(UserProfile);
