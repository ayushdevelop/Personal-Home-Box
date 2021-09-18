import React, { useState, useEffect, Component } from "react";

import { POSTER_SIZE, IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";
import NoImage from "../images/no-image2.jpg";

import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
import apiSettings from "../API";

//Hook
import { useHomeFetch } from "./Hooks/useHomeFetch";
import { searchbar } from "./Navbar";

// const Home = () => {
//   const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
//     useHomeFetch();

//   if (error) return <div>Something Went Wrong..</div>;

//   const { results } = state;
//   console.log(searchbar());

//   return (
//     <>
//       <SearchBar setSearchTerm={setSearchTerm} />
//       {!searchTerm && results[15] ? (
//         <HeroImage
//           image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${results[15].backdrop_path}`}
//           title={results[15].original_title}
//           text={results[15].overview}
//         />
//       ) : null}

//       <Grid header={searchTerm ? "SEARCH RESULTS" : "POPULAR MOVIES"}>
//         {results.map((movie) => (
//           <Thumb
//             key={movie.id}
//             image={
//               movie.poster_path
//                 ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
//                 : NoImage
//             }
//             clickable={true}
//             movieId={movie.id}
//           />
//         ))}
//       </Grid>
//       {loading && <Spinner />}
//       {state.page < state.total_pages && !loading && (
//         <Button text="Load More" callback={() => setIsLoadingMore(true)} />
//       )}
//     </>
//   );
// };

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

class Home extends Component {
  state = {
    movies: initialState,
    searchTerm: "",
    isLoadingMore: false,
    loading: false,
    error: false,
  };

  getMovies = async (page, searchTerm = "") => {
    try {
      this.setState({ error: false, loader: true });
      const movies = await apiSettings.fetchMovies(searchTerm, page);

      this.setState((prev) => ({
        ...prev,
        movies: {
          ...movies,
          results:
            page > 1
              ? [...prev.movies.results, ...movies.results]
              : [...movies.results],
        },
        loading: false,
      }));
    } catch {
      this.setState({ error: true, loading: false });
    }
  };

  handleSearch = (searchTerm) => {
    this.setState({ movies: initialState, searchTerm });
    console.log(searchTerm);
    this.getMovies(1, this.state.searchTerm);
  };

  handleLoadMore = () => {
    this.getMovies(this.state.movies.page + 1, this.state.searchTerm);
  };

  componentDidMount() {
    this.getMovies(1);
  }

  render() {
    const { movies, searchTerm, loading, error } = this.state;
    if (error) return <div>Something Went Wrong..</div>;
    return (
      <>
        <SearchBar setSearchTerm={this.handleSearch} />
        {!searchTerm && movies.results[15] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[15].backdrop_path}`}
            title={movies.results[15].original_title}
            text={movies.results[15].overview}
          />
        ) : null}

        <Grid header={searchTerm ? "SEARCH RESULTS" : "POPULAR MOVIES"}>
          {movies.results.map((movie) => (
            <Thumb
              key={movie.id}
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              clickable={true}
              movieId={movie.id}
            />
          ))}
        </Grid>
        {loading && <Spinner />}
        {movies.page < movies.total_pages && !loading && (
          <Button text="Load More" callback={this.handleLoadMore} />
        )}
      </>
    );
  }
}

export { Home as default };
