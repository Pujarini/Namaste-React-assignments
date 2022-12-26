const RepoCard = ({ card }) => {
  return (
    <div className="border-2 rounded-sm  p-10 min-h-fit w-80">
      <h2 className="mb-9">{card.name}</h2>
      <span className="mr-4 text-yellow-300">☆ {card.stargazers_count}</span>
    </div>
  );
};

export default RepoCard;
