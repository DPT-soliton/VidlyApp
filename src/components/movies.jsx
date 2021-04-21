import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MovieTables from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    page_size: 8,
    current_page: 1,
    sortColumn: { path: "title", order: "asc" },
    select_all: false,
    imageUrl: "https://picsum.photos/50",
    liked: false,
  };

  /**This will be calle when an instance of this component is rendered to the DOM */
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    /**Desctructuring state objects */
    // const { length: count } = this.state.movies;
    const { current_page, page_size, movies: all_movies, selected_genre, sortColumn } = this.state;

    const filtered = selected_genre && selected_genre._id ? all_movies.filter((m) => m.genre._id === selected_genre._id) : all_movies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, current_page, page_size);

    return (
      <div>
        <div className="row px-5">
          <div className="col-md-3 py-5">
            <ListGroup items={this.state.genres} selected_item={this.state.selected_genre} onItemSelect={this.handleGenreSelect} />
          </div>
          <div className="col">
            <MovieTables
              movies={movies}
              filtered={filtered}
              state={this.state}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
          </div>
        </div>
        <Pagination items_count={filtered.length} current_page={current_page} page_size={page_size} onPageChange={this.handlePageChange} />
      </div>
    );
  }
}

console.log(Movies, getMovies());
export default Movies;
