import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import Layout from "./components/parentComp/Layout";

import Home from "./pages/home/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

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
            {/* path - /user/4 */}
            <Route path="user/:id" element={<User />} />
            {/* path - /newUser */}
            <Route path="newUser" element={<NewUser />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
