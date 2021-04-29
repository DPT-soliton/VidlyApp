import React from "react";

const MovieForm = ({ match, history }) => {
  let movieImage = {
    imageUrl: "https://picsum.photos/300",
  };

  return (
    <div>
      <img src={movieImage.imageUrl} alt="random images"></img>
      <h1 className="display-4">Movie Details: {match.params.id}</h1>
      <button className="btn btn-primary btn-lg" onClick={() => history.push("/movies")}>
        Back to Movies
      </button>
    </div>
  );
};

export default MovieForm;
