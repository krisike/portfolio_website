import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function toggleMenu(e) {
  const itemMenu = document.getElementById('itemMenu');

  if (itemMenu.className === 'menu') {
    itemMenu.className += ' hide';
  } else {
    itemMenu.className = 'menu';
  }
}

const Navigation = () => {
  return (
    <div>
      <nav className="containerNav">
        <span className="headerTitle">Krisi Keranova</span>
        <ul id="itemMenu" className="menu hide">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="h-menu" onClick={toggleMenu}>
          <i id="nav" className="fa fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
