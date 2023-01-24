import { useContext, useState } from "react";
import { login } from "../../context/authContext/ApiCalls";
import { authContext } from "../../context/authContext/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   get data from state via context
  const { isFetching, dispatch } = useContext(authContext);

  const handleLogin = (e) => {
    e.preventDefault();
    // trigger login function in apiCalls to initiate the authentication
    // params are - (user,dispatch)
    // {email:hello,password:world}
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <h1 className="loginHeader">Welcome to Admin Dashboard</h1>
      <form className="loginForm">
        <input
          type="text"
          placeholder="Enter your email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
