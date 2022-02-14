import React from 'react';
import { Header } from './components/moleules/header/Header';
import { Router } from './router/Router';
import { ReactQueryDevtools } from 'react-query/devtools';
function App() {
  return (
    <>
      <Header />
      <Router />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
