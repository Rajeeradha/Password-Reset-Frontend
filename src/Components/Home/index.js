import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.clear();
      navigate("/")
    };
  return (
    <>
      <div className="layout">
        <div className="header d-flex justify-content-between align-items-center text-bg-primary">
          <div>
            <h1 className="logo">Welcome</h1>
          </div>
          <div className="d-flex">
            <button
              variant="light"
              className="justify-content-end signout"
              onClick={handleLogout}
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="content d-flex justify-content-center">
          <h1>User successfully signed in..</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
