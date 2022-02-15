import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/home/Home';
import { Search } from '../components/pages/search/Search';
import { Tv } from '../components/pages/tv/Tv';

export const Router = () => {
  return (
    <Routes>
      <Route path="/tv" element={<Tv />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/" element={<Home />}>
        <Route path="/movies/:movieId" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};
