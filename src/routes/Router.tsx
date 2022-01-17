import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Detail, Home, Register } from '../pages';
import Login from '../pages/Login';
import RequireAuth from './RequireAuth';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/home/:dragonId"
          element={
            <RequireAuth>
              <Detail />
            </RequireAuth>
          }
        />
        <Route
          path="register"
          element={
            <RequireAuth>
              <Register />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
