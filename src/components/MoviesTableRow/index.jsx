import React from "react";
import LikeComponent from "../common/like";

const MoviesTableRow = ({ movie, onDelete, onLike }) => {
  const { title, genre, numberInStock, dailyRentalRate, _id } = movie;
  return (
    <tr>
      <td>{title}</td>
      <td>{genre.name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <LikeComponent liked={movie.liked} onLike={onLike} movie={movie} />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(_id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MoviesTableRow;
