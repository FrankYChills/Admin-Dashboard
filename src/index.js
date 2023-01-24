import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import Login from "./pages/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // app has now access to auth state
  <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </AuthContextProvider>
);
