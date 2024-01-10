import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="content-navBar">
      <div className="nav-menu">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="menu-icon">
            <img src="img/menu.svg" alt="" />
          </i>
        </label>
        <ul>
          <li>
            <Link to={"/"}>Navbar</Link>
          </li>
          <li>
            <Link to={"acercade"}>Home</Link>
          </li>
          <li>
            <Link to={"acercade"}>Acerca de mi</Link>
          </li>
          <li>
            <Link to={"experiencia"}>Features</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
