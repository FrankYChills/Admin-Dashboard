import { Routes, Route, Navigate } from "react-router-dom";

import UserList from "./pages/userList/UserList";
import Layout from "./components/parentComp/Layout";
import { useContext, useEffect } from "react";
import { authContext } from "./context/authContext/AuthContext";

import Home from "./pages/home/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/products/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import MovieLists from "./pages/lists/MovieLists";

function App() {
  const { user } = useContext(authContext);

  useEffect(() => {}, [user]);
  return (
    <>
      <Routes>
        <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <Layout /> : <Navigate to="/login" />}>
          {/* / path */}
          <Route index element={<Home />} />
          {/* path - /users */}
          <Route path="users" element={<UserList />} />
          {/* path - /user/4 */}
          <Route path="user/:id" element={<User />} />
          {/* path - /newUser */}
          <Route path="newUser" element={<NewUser />} />
          {/* /products */}
          <Route path="movies" element={<ProductList />} />
          {/* /product/4 */}
          <Route path="product/:id" element={<Product />} />
          {/* /newProduct */}
          <Route path="newProduct" element={<NewProduct />} />
          {/* /lists */}
          <Route path="lists" element={<MovieLists />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
