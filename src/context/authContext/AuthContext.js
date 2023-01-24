import { createContext, useEffect, useReducer } from "react";

import authReducer from "./AuthReducer";

// initial state for auth
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

// create context with init state and export this too to get the state of this particular context
export const authContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  // define the state and its reducer to update that
  const [state, dispatch] = useReducer(authReducer, initialState);

  // for storing user credential's or this contexts user state in local storage so that it doesn't gets cleared on refresh
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // provide state values to childrens as
  return (
    <authContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch, //provide dispatch function to all components to update the state
      }}
    >
      {children}
    </authContext.Provider>
  );
};
