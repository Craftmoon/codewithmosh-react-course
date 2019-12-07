import React, { Component } from "react";
import "./App.css";
import MoviesTable from "./components/MoviesTable";
import StatusLabel from "./components/StatusLabel";
import Pagination from "./components/common/pagination";
import ListGroup from "./components/common/listGroup";
import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import { paginate } from "./utils/paginate";
import _ from "lodash";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: {},
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres, selectedGenre: genres[0] });
  }

  handleDelete = movieId => {
    const movies = this.state.movies.filter(movie => {
      return movie._id !== movieId;
    });

    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn: sortColumn });
  };

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;
    const { movies: allMovies } = this.state;

    // filter by Genre
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
        : allMovies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);

    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreChange}
            />
          </div>
          <div className="col-10">
            <StatusLabel movieCount={filteredMovies.length} className="p-2" />
            <MoviesTable
              tableHeadTitles={this.state.headTitles}
              movies={movies}
              onSort={this.handleSort}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              sortColumn={this.state.sortColumn}
            />
            <Pagination
              itemCount={filteredMovies.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
