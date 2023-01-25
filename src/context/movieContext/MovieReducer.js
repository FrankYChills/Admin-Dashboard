// reducers takes data in from action and update the state
const movieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES_START":
      // return new state
      return {
        movies: null,
        isFetching: true,
        error: false,
      };

    case "GET_MOVIES_SUCCESS":
      return {
        // action.payload will be movies here
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        movies: null,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;
