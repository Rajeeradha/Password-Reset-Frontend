import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `https://password-reset-ms7z.onrender.com/api/password-reset`;
      const {data} = await axios.post(url, {email});
      setMsg(data.message);
      setError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  return (
    <>
      <div className="forgotpassword">
        <div className="row justify-content-center align-items-center w-100 h-100">
          <div className="col-md-5">
            <h1>Forgot Password ?</h1>
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <div className="my-1">
                We'll send a link to reset your password.
              </div>

              <div className="d-flex justify-content-center">
                {error && <div className="error_msg">{error}</div>}
                {msg && <div className="success_msg">{msg}</div>}
              </div>

              <div className="d-flex justify-content-start">
                <button className="click btn btn-primary my-2" type="submit">
                  Send Mail
                </button>
              </div>

              <div className="d-flex justify-content-between">
                <Link to="/signin" className="text-primary">Click here to Sign in</Link>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <div className="lottie">
              <lottie-player
                src="https://assets2.lottiefiles.com/private_files/lf30_GjhcdO.json"
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

export default ForgotPassword;
