import { createContext, useReducer } from "react";

import movieReducer from "./MovieReducer";

// initial state for movies
const initialState = {
  movies: [],
  isFetching: false,
  error: false,
};

// creat and init a context
export const movieContext = createContext(initialState);

// create a context provider
export const MovieContextProvider = ({ children }) => {
  // define reducer to update the state
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <movieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};
