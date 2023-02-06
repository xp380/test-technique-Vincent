import { START_MOVIES, SUCCESS_MOVIES, ERROR_MOVIES } from "./types";

export const startMovie = () => ({
  type: START_MOVIES,
});

export const successMovie = (allMovies) => ({
  type: SUCCESS_MOVIES,
  payload: allMovies,
});

export const errorMovie = (error) => ({
  type: ERROR_MOVIES,
  payload: error,
});
