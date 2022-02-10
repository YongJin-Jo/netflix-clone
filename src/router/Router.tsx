import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/home/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/tv"></Route>
      <Route path="/search"></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
