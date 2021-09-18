import React from "react";
import { useParams } from "react-router";

import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import { useMovieFetch } from "./Hooks/useMovieFetch";

import NoImage from "../images/no-image2.jpg";

const Movie = () => {
  const movieId = useParams();

  const { state: movie, error, loading } = useMovieFetch(movieId);

  console.log(movie);
  if (loading) return <Spinner />;
  if (error) return <div>Something Went Wrong</div>;

  return (
    <div>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
    </div>
  );
};

export default Movie;
