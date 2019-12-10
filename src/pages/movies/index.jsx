import React, { Component } from "react";
import _ from "lodash";
import MoviesTable from "../../components/MoviesTable/index";
import StatusLabel from "../../components/StatusLabel/index";
import Pagination from "../../components/common/pagination";
import ListGroup from "../../components/common/listGroup";
import { getMovies } from "../../services/fakeMovieService";
import { paginate } from "../../utils/paginate";
import { getGenres } from "../../services/fakeGenreService";

class Movies extends Component {
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

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      movies: allMovies
    } = this.state;

    // if no genre is selected return all movies, otherwise filter by genre
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
        : allMovies;

    /**
     * build the sortedMovies array by ordering it by path (title, genre.name, numberInStock) according to the
     * currently selected order (asc or desc)
     */
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    // Create array of movies to be shown in the current page
    const movies = paginate(sortedMovies, currentPage, pageSize);

    return { totalCount: filteredMovies.length, data: movies };
  };

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreChange}
          />
        </div>
        <div className="col-10">
          <StatusLabel movieCount={totalCount} className="p-2" />
          <MoviesTable
            tableHeadTitles={this.state.headTitles}
            movies={movies}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            sortColumn={sortColumn}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
