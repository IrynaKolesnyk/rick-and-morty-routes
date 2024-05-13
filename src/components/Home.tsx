import React from 'react';
import '../styles/Home.scss';

const rickAndMortyLogo = require('../images/Rick-And-Morty-Logo.png');

const Home = () => {
  return (
    <img
      src={rickAndMortyLogo}
      alt="rick and morty logo"
      className="logo"
    />
  );
};

export default Home;
