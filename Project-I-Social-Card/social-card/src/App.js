import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <section className="app">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </section>
  );
};

export default App;
