// reducers takes data in from action and update the state
// reducer take input the current state and the action specified
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

    case "DELETE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_MOVIE_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id != action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "ADD_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "ADD_MOVIE_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "ADD_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
