import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, filtered, state, onLike, onDelete } = this.props;
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
          {/* <div className="container container-fluid"> */}
          <h1 className="lead text-white">
            <span className="m-2">
              <img style={img_style} src={state.imageUrl} alt="movieUrlImage"></img>
            </span>
            List of Movies
          </h1>
          {/* </div> */}
        </nav>
        <p className="lead" hidden={!state.movies.length <= 0}>
          No more movies in the database.
        </p>
        <p className="lead" hidden={state.movies.length === 0}>
          The are {filtered.length} {state.movies.length > 1 ? "movies" : "movie"} in the database.
        </p>
        <table className="table" hidden={state.movies.length <= 0}>
          <thead>
            <tr>
              <th onClick={() => this.raiseSort("title")} scope="col">
                Title
              </th>
              <th onClick={() => this.raiseSort("genre.name")} scope="col">
                Genre
              </th>
              <th onClick={() => this.raiseSort("numberInStock")} scope="col">
                Stock
              </th>
              <th onClick={() => this.raiseSort("publishDate")} scope="col">
                Rate
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
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
