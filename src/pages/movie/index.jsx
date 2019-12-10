import React from "react";

const MovieForm = ({ match, history }) => {
  const handleSave = () => {
    // Navigate to /products.
    // Using push here so you can still use the browser back button (replace replaces the current
    // address so you don't have history)
    history.push("/movies");
  };

  return (
    <div>
      <h1>Movie Form {match.params.id} </h1>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          handleSave();
        }}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
