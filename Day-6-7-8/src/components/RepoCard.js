import React from "react";

const RepoCard = ({ card }) => {
  return (
    <div className="repo-item">
      <h2>{card.name}</h2>
      <span>☆ {card.stargazers_count}</span>
    </div>
  );
};

export default RepoCard;
