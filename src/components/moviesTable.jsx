import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableHeader from "../components/common/tableHeader";
import TableBody from "../components/common/tableBody";
import Like from "../components/common/like";

class MoviesTable extends Component {
  /**Columns for Table Header component */
  columns = [
    { path: "title", label: "Title", content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "dummyKey1", content: (movie) => <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} /> },
    {
      key: "dummyKey2",
      content: (movie) => (
        <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(movie._id)}>
          Delete
        </button>
      ),
    },
  ];

  render() {
    /**Desctructuring props objects */
    const { movies, filtered, state, onLike, onDelete, onSort } = this.props;

    let img_style = {
      borderRadius: 50,
      margin: 2,
    };
    let header = {
      borderRadius: 5,
    };

    return (
      <div className="py-5">
        <nav className="navbar navbar-light bg-secondary " style={header}>
          <h1 className="lead text-white">
            <span className="m-2">
              <img style={img_style} src={state.imageUrl} alt="movieUrlImage"></img>
            </span>
            List of Movies
          </h1>
        </nav>

        <p className="lead" hidden={!filtered.length <= 0}>
          No more movies in the database.
        </p>
        <p className="lead" hidden={filtered.length === 0}>
          The are {filtered.length} {filtered.length > 1 ? "movies" : "movie"} in the database.
        </p>

        <table className="table table-hover" hidden={state.movies.length <= 0}>
          <TableHeader columns={this.columns} sortColumn={state.sortColumn} onSort={onSort} />
          <TableBody data={movies} columns={this.columns} onLike={onLike} onDelete={onDelete} />
        </table>
      </div>
    );
  }
}

export default MoviesTable;
