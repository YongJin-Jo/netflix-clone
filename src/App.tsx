import React from 'react';
import { Header } from './components/moleules/header/Header';
import { Router } from './router/Router';
import { Footer } from './components/moleules/footer/Footer';
function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
