// actions send params to reducer to update the state
// any function triggered will send type and payload to reducer

// GET MOVIES

export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});
export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

// DELETE A MOVIE
export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});
export const deleteMovieSuccess = (movieId) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: movieId,
});
export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
