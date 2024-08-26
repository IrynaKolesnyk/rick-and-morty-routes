import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoriesLinks from './reusableComponents/CategoriesLinks';
const episodesArr = require('../appData/episode.json');

const Episodes = () => {
  const { pathname } = useLocation();
  return (
    <CategoriesLinks
      dataArr={episodesArr}
      pathName={pathname}
    />
  );
};

export default Episodes;
