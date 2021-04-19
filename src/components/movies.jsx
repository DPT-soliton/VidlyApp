import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    page_size: 4,
    current_page: 1,
    imageUrl: "https://picsum.photos/50",
    liked: false,
  };

  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    console.log("Delete Clicked", this);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    console.log("Liked");
    const update_movies = [...this.state.movies];
    const index = update_movies.indexOf(movie);
    update_movies[index] = { ...movie };
    update_movies[index].liked = !update_movies[index].liked;
    this.setState({ movies: update_movies });
  };

  handlePageChange = (page) => {
    this.setState({ current_page: page });
  };

  img_style = {
    borderRadius: 50,
    margin: 2,
  };
  header = {
    borderRadius: 5,
  };

  render() {
    const { length: count } = this.state.movies;
    const { current_page, page_size, movies: all_movies } = this.state;
    const movies = paginate(all_movies, current_page, page_size);

    return (
      <div className="container container-fluid py-5 ">
        <nav className="navbar navbar-light bg-secondary " style={this.header}>
          <div className="container container-fluid">
            <h1 className="lead text-white">
              <span className="m-2">
                <img style={this.img_style} src={this.state.imageUrl} alt="movieUrlImage"></img>
              </span>
              List of Movies
            </h1>
          </div>
        </nav>
        <p className="lead" hidden={!this.state.movies.length <= 0}>
          No more movies in the database.
        </p>
        <p className="lead" hidden={this.state.movies.length === 0}>
          The are {this.state.movies.length} {this.state.movies.length > 1 ? "movies" : "movie"} in the database.
        </p>
        <table className="table" hidden={this.state.movies.length <= 0}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
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
                  <Like liked={m.liked} onLike={() => this.handleLike(m)} />
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(m._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination items_count={count} current_page={current_page} page_size={page_size} onPageChange={this.handlePageChange} />
      </div>
    );
  }
}

console.log(Movies, getMovies());
export default Movies;
