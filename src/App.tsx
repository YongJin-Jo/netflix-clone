import React from 'react';
import { Header } from './components/moleules/header/Header';
import { Router } from './router/Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Footer } from './components/moleules/footer/Footer';
function App() {
  return (
    <>
      <Header />
      <Router />
      <ReactQueryDevtools />
      <Footer />
    </>
  );
}

export default App;
