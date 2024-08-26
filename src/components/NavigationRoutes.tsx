import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Episodes from './Episodes';
import Locations from './Locations';
import Home from './Home';
import Сharacters from './Сharacters';
import NotFound from './NotFound';
import NavLinks from './NavLinks';
import Character from './Character';
import SignIn from './auth/SignIn';
import Location from './Location';
import Episode from './Episode';

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route element={<NavLinks />}>
        <Route path="/" element={<Home />} />
        <Route path="/characters">
          <Route index element={<Сharacters />} />
          <Route
            path=":id"
            element={<Character />}
          />
        </Route>
        <Route path="/locations">
          <Route index element={<Locations />} />
          <Route
            path=":id"
            element={<Location />}
          />
        </Route>

        <Route path="/episodes">
          <Route index element={<Episodes />} />
          <Route
            path=":id"
            element={<Episode />}
          />
        </Route>
      </Route>
      <Route
        path="/signIn"
        element={<SignIn />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavigationRoutes;
