import React from "react";
// import { Nav } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">ToDo List</Link>
          </li>
          <li>
            <Link to="/pokeapi">PokeApi</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
