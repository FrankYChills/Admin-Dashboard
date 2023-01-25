import axios from "axios";
import {
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieAction";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("http://localhost:3500" + "/api/movies", {
      headers: {
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).accessToken
        }`,
      },
    });
    dispatch(getMoviesSuccess(res.data.data));
  } catch (err) {
    dispatch(getMoviesFailure());
    console.log(err);
  }
};
