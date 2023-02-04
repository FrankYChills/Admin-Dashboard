import axios from "axios";
import {
  addMovieFailure,
  addMovieStart,
  addMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  updateMovieSuccess,
  updateMovieFailure,
  updateMovieStart,
} from "./MovieAction";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  // req to api
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/api/movies", {
      headers: {
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).accessToken
        }`,
      },
    });
    //  on success update the state
    dispatch(getMoviesSuccess(res.data.data));
  } catch (err) {
    dispatch(getMoviesFailure());
    console.log(err);
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    const res = await axios.delete(
      process.env.REACT_APP_API_URL + `/api/movies/${id}`,
      {
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      }
    );
    console.log(res.data);
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
    console.log(err);
  }
};

export const addMovie = async (movie, dispatch) => {
  dispatch(addMovieStart());
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + "/api/movies",
      movie,
      {
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      }
    );
    console.log(res.data);
    dispatch(addMovieSuccess(res.data.data));
  } catch (err) {
    dispatch(addMovieFailure());
    console.log(err);
  }
};

export const updateMovie = async (id, movie, dispatch) => {
  dispatch(updateMovieStart());

  try {
    const res = await axios.put(
      process.env.REACT_APP_API_URL + `/api/movies/${id}`,
      movie,
      {
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      }
    );
    console.log(res.data);
    dispatch(updateMovieSuccess(res.data.data));
  } catch (err) {
    dispatch(updateMovieFailure());
    console.log(err);
  }
};
