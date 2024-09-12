import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authenticate, getUser } from "../services/authorize";
import NavBar from "./NavBar";
import './Login.css'

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { username, password } = state;
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/login`, { username, password })
      .then((response) => {
        authenticate(response, () => {
          navigate("/create");
        });
      })
      .catch((err) => {
        Swal.fire("Oops...", err.response.data.error, "error");
      });
  };
  useEffect(() => {
    getUser() && navigate("/");
  }, []);
  return (
    <div className="container p-7">
      <NavBar />
      <h1>Login | Admin</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={inputValue("username")}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={inputValue("password")}
          />
        </div>
        <br />
        <input type="submit" value="login" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Login;
