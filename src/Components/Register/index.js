import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://password-reset-ms7z.onrender.com/api/register";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message)
      navigate("/");
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
      <div className="register">
        <div className="row justify-content-center align-items-center w-100 h-100">
          <div className="col-md-5">
            <div className="lottie">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-md-5">
            <h1>Register</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <label className="mb-2 my-3">Name</label>
              <input
                className="inputfield col-md-12"
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                required
                value={data.name}
                onChange={handleChange}
              />

              <label className="mb-2 my-3">Email</label>
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
              <input
                className="inputfield col-md-12"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                value={data.password}
                onChange={handleChange}
              />

              <div className="d-flex justify-content-center  my-2">
                {error && <div className="error_msg">{error}</div>}
                {msg && <div className="success_msg">{msg}</div>}
              </div>

              <div className="d-flex justify-content-between align-items-center my-2">
                <Link to="/" className="text-primary my-2">
                  Already registered User? Sign in
                </Link>

                <button className="click btn btn-primary my-2" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
