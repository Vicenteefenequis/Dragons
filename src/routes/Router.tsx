import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Detail, Home, Register } from '../pages';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="home/:dragonId" element={<Detail />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
