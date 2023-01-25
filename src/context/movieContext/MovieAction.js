// actions send params to reducer to update the state
// any function triggered will send type and payload to reducer

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
