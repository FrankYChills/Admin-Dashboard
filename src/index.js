import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { ListContextProvider } from "./context/listContext/listContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // app has now access to auth state
  <AuthContextProvider>
    <ListContextProvider>
      <MovieContextProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </MovieContextProvider>
    </ListContextProvider>
  </AuthContextProvider>
);
