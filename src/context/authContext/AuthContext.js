import { createContext, useReducer } from "react";

import authReducer from "./AuthReducer";

// initial state for auth
const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

// create context with init state and export this too to get the state of this particular context
export const authContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  // define the state and its reducer to update that
  const [state, dispatch] = useReducer(authReducer, initialState);
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
