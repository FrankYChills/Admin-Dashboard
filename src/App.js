import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import Layout from "./components/parentComp/Layout";

import Home from "./pages/home/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/products/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

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
            {/* /products */}
            <Route path="products" element={<ProductList />} />
            {/* /product/4 */}
            <Route path="product/:id" element={<Product />} />
            {/* /newProduct */}
            <Route path="newProduct" element={<NewProduct />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
