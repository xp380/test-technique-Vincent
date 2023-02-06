import axios from "axios";
import { startMovie, successMovie, errorMovie } from "./action";

export const allMovies = () => (dispatch) => {
  dispatch(startMovie());
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ad2c28e0345278f3c8b002efddadf28f&page=1`
    )
    .then(({ data }) => {
      dispatch(successMovie(data.results));
    })
    .catch((error) => {
      dispatch(errorMovie(error));
    });
};
