import React from 'react';
import { FaDragon } from 'react-icons/fa';
import { ImPlus } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? 'menu__content active' : 'menu__content'
        }
      >
        <FaDragon size={30} />
        <h1>Home</h1>
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? 'menu__content active' : 'menu__content'
        }
      >
        <ImPlus size={30} />
        <h1>Cadastrar</h1>
      </NavLink>
    </div>
  );
};

export default Header;
