import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Components/Register';
import Signin from './Components/Signin';
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import PasswordReset from './Components/PasswordReset';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
      </Routes>
    </>
  )
}

export default App;
