import React from "react";
import MoviesTableRow from "../MoviesTableRow";

const MoviesTable = props => {
  const { movies, onDelete, onLike, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            onClick={() => {
              onSort("title");
            }}
          >
            Title
          </th>
          <th
            onClick={() => {
              onSort("genre.name");
            }}
          >
            Genre
          </th>
          <th
            onClick={() => {
              onSort("numberInStock");
            }}
          >
            Stock
          </th>
          <th
            onClick={() => {
              onSort("dailyRentalRate");
            }}
          >
            Rate
          </th>
          <td />
          <td />
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <MoviesTableRow
            movie={movie}
            key={movie._id}
            onDelete={onDelete}
            onLike={onLike}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
