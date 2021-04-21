import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    page_size: 4,
    current_page: 1,
    select_all: false,
    imageUrl: "https://picsum.photos/50",
    liked: false,
  };

  /**This will be calle when an instance of this component is rendered to the DOM */
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

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

  handleGenreSelect = (genre) => {
    console.log(genre);
    // const filter_movies = this.state.movies.filter(
    //   (m) => m.genre.name === genre
    // );
    // this.setState({ movies: filter_movies });
    this.setState({ selected_genre: genre, current_page: 1 });
  };

  img_style = {
    borderRadius: 50,
    margin: 2,
  };
  header = {
    borderRadius: 5,
  };

  render() {
    /**Desctructuring state objects */
    // const { length: count } = this.state.movies;
    const { current_page, page_size, movies: all_movies /**movies asign to alias all_movies to avoid conflict */, selected_genre } = this.state;

    const filtered = selected_genre && selected_genre._id ? all_movies.filter((m) => m.genre._id === selected_genre._id) : all_movies;

    const movies = paginate(filtered, current_page, page_size);

    return (
      <div className="row px-5">
        <div className="col-md-3 py-5">
          <ListGroup items={this.state.genres} selected_item={this.state.selected_genre} onItemSelect={this.handleGenreSelect} />
        </div>

        <div className="col py-5">
          <nav className="navbar navbar-light bg-secondary " style={this.header}>
            {/* <div className="container container-fluid"> */}
            <h1 className="lead text-white">
              <span className="m-2">
                <img style={this.img_style} src={this.state.imageUrl} alt="movieUrlImage"></img>
              </span>
              List of Movies
            </h1>
            {/* </div> */}
          </nav>
          <p className="lead" hidden={!this.state.movies.length <= 0}>
            No more movies in the database.
          </p>
          <p className="lead" hidden={this.state.movies.length === 0}>
            The are {filtered.length} {this.state.movies.length > 1 ? "movies" : "movie"} in the database.
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
          <Pagination items_count={filtered.length} current_page={current_page} page_size={page_size} onPageChange={this.handlePageChange} />
        </div>
      </div>
    );
  }
}

console.log(Movies, getMovies());
export default Movies;
