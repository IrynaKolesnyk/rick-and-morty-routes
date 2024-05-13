import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Episodes from './Episodes';
import Locations from './Locations';
import Home from './Home';
import Сharacters from './Сharacters';
import NotFound from './NotFound';
import NavLinks from './NavLinks';
import Character from './Character';

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route element={<NavLinks />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Сharacters />}
        />
        <Route
          path="/characters/:id"
          element={<Character />}
        />
        <Route
          path="/locations"
          element={<Locations />}
        />
        <Route
          path="/episodes"
          element={<Episodes />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavigationRoutes;
