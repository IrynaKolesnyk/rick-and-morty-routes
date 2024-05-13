import React from 'react';
import {
  NavLink,
  Outlet,
} from 'react-router-dom';

import '../styles/NavLinks.scss';

const NavLinks = () => {
  return (
    <div className="navigationLinks">
      <ul className="navigationLinks_list">
        <li className="navigationLinks_item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'navigationLinks_link'
                : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li className="navigationLinks_item">
          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive
                ? 'navigationLinks_link'
                : ''
            }
          >
            Characters
          </NavLink>
        </li>
        <li className="navigationLinks_item">
          <NavLink
            to="/locations"
            className={({ isActive }) =>
              isActive
                ? 'navigationLinks_link'
                : ''
            }
          >
            Locations
          </NavLink>
        </li>
        <li className="navigationLinks_item">
          <NavLink
            to="/episodes"
            className={({ isActive }) =>
              isActive
                ? 'navigationLinks_link'
                : ''
            }
          >
            Episodes
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default NavLinks;
