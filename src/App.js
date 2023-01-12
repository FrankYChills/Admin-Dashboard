import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import Layout from "./components/parentComp/Layout";

import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* / path */}
            <Route index element={<Home />} />
            {/* path - /users */}
            <Route path="users" element={<UserList />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
