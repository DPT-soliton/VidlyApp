import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "../components/common/tableHeader";

class MoviesTable extends Component {
  /**Columns for Table Header component */
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "dummyKey1" },
    { key: "dummyKey2" },
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

        <table className="table" hidden={state.movies.length <= 0}>
          <thead>
            <TableHeader columns={this.columns} sortColumn={state.sortColumn} onSort={onSort} />
          </thead>

          <tbody>
            {movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like liked={m.liked} onLike={() => onLike(m)} />
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(m._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesTable;
