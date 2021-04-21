import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    liked: false,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    liked: false,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471833",
    title: "Pirates",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 4,
    dailyRentalRate: 4.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471844",
    title: "The Mob",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471855",
    title: "The Gangster",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 4,
    dailyRentalRate: 5.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471899",
    title: "Gladiator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 8,
    dailyRentalRate: 4.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47122f",
    title: "Glass Door",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 4.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47133f",
    title: "Parasite",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47144f",
    title: "Wrong Turn",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 5.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47122e",
    title: "Mr. Bean",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 22,
    dailyRentalRate: 6.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47133e",
    title: "God's Must Be Crazy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: 5.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47144e",
    title: "Bruce Almighty",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 8,
    dailyRentalRate: 5.5,
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47155e",
    title: "The 3 Stogies",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    liked: false
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
