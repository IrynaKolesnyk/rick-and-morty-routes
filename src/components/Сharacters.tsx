import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoriesLinks from './reusableComponents/CategoriesLinks';
const charactersArr = require('../appData/characters.json');

const Сharacters = () => {
  const { pathname } = useLocation();
  return (
    <CategoriesLinks
      dataArr={charactersArr}
      pathName={pathname}
    />
  );
};

export default Сharacters;
