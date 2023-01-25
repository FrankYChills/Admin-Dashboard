import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // app has now access to auth state
  <AuthContextProvider>
    <MovieContextProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </MovieContextProvider>
  </AuthContextProvider>
);
