import React from "react";

const StatusLabel = ({ className, movieCount }) => {
  return (
    <div className={className}>
      {movieCount !== 0
        ? `Showing ${movieCount} movie(s) in the database`
        : "There are no movies in the database."}
    </div>
  );
};

export default StatusLabel;
