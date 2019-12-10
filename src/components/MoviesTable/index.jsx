import React from "react";
import LikeComponent from "../common/like";
import Table from "../common/table";
import { Link } from "react-router-dom";

const MoviesTable = ({ movies, onDelete, onLike, onSort, sortColumn }) => {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    {
      path: "genre.name",
      label: "Genre"
    },
    {
      path: "numberInStock",
      label: "Stock"
    },
    {
      path: "dailyRentalRate",
      label: "Rate"
    },
    {
      key: "like",
      content: movie => (
        <LikeComponent liked={movie.liked} onLike={onLike} item={movie} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(movie._id);
          }}
        >
          Delete
        </button>
      )
    }
  ];

  return (
    <Table
      data={movies}
      columns={columns}
      onSort={onSort}
      onLike={onLike}
      sortColumn={sortColumn}
    />
  );
};

export default MoviesTable;
