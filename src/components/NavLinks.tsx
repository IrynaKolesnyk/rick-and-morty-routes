import React, {
  useEffect,
  useState,
} from 'react';
import {
  NavLink,
  Outlet,
  useNavigate,
} from 'react-router-dom';

import '../styles/NavLinks.scss';

const NavLinks = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    const userName = user
      ? JSON.parse(user).name
      : '';

    setUserName(userName);
  }, []);

  const handleLogOutClick = () => {
    navigate('signin');
    localStorage.removeItem('user');
  };

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
        <li className="navigationLinks_item logOut">
          <p className="welcomeText">
            Hi, {userName}
          </p>
          <button
            className="logOutButton"
            onClick={handleLogOutClick}
          >
            Log out
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default NavLinks;
