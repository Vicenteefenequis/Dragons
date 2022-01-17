import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaDragon } from 'react-icons/fa';
import { ImPlus } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header = (): JSX.Element => {
  const [toggleMenu, setToogleMenu] = useState(false);

  return (
    <div className="header">
      <div className="container__menu">
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

      <div className="container__menu__responsive">
        {toggleMenu ? (
          <AiOutlineClose onClick={() => setToogleMenu(false)} size={30} />
        ) : (
          <BiMenuAltRight onClick={() => setToogleMenu(true)} size={30} />
        )}
        {toggleMenu && (
          <div className="container__links scale-up-center">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'menu__content active' : 'menu__content'
              }
              to="/home"
            >
              <h1>Home</h1>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'menu__content active' : 'menu__content'
              }
              to="/register"
            >
              <h1>Cadastrar</h1>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
