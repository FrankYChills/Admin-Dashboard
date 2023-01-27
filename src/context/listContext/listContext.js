import { FlashOnTwoTone } from "@mui/icons-material";
import { createContext, useReducer } from "react";
import listReducer from "./listReducer";

const initialState = {
  lists: [],
  isFetching: false,
  error: false,
};

export const listContext = createContext(initialState);

export const ListContextProvider = ({ children }) => {
  // define reducer
  const [state, dispatch] = useReducer(listReducer, initialState);
  return (
    <listContext.Provider
      value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </listContext.Provider>
  );
};
