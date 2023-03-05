import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  const image = require(`../../assets/images/emoji-web-dev-female.png`);
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/" style={{ marginRight: "54px", color: "rgb(9, 155, 180)", fontStyle: "italic", fontSize: "30px"}}>
      <img src={image} width="48px" style={{ margin: "0 15px"}} alt="avatar icon" />
        Jingyue
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
