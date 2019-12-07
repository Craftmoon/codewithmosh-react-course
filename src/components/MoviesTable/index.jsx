import React from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";
import LikeComponent from "../common/like";

const MoviesTable = props => {
  const { movies, onDelete, onLike, onSort, sortColumn } = props;

  const columns = [
    {
      path: "title",
      label: "Title"
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
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody
        columns={columns}
        data={movies}
        onDelete={onDelete}
        onLike={onLike}
      />
    </table>
  );
};

export default MoviesTable;
