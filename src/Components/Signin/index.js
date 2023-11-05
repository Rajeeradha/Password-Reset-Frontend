import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://password-reset-ms7z.onrender.com/api/signin";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      navigate("/home");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="signin">
        <div className="row justify-content-center align-items-center w-100 h-100">
          <div className="col-md-5">
            <h1>Sign in</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <label className="mb-2 my-3">Email</label>
              <br />
              <input
                className="inputfield col-md-12"
                type="email"
                name="email"
                placeholder="Enter email"
                required
                value={data.email}
                onChange={handleChange}
              />

              <label className="mb-2 my-3">Password</label>
              <br />
              <input
                className="inputfield col-md-12"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                value={data.password}
                onChange={handleChange}
              />

              <br />

              <div className="d-flex justify-content-between my-3">
                <Link className="text-primary" to="/register">
                  Don’t have an account? Register
                </Link>

                <Link to="/forgot-password" className="text-primary">Forgot Password ?</Link>
              </div>

              <div className="d-flex justify-content-center">
                {error && <div className="error_msg">{error}</div>}
                </div>

              <div className="d-flex justify-content-center">
                <button className="click my-2 col-md-12 btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <div className="lottie">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_pprxh53t.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
