import React, { useContext } from "react";
// import { Nav } from "./NavbarStyles";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const { todos } = useContext(UserContext);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo" className={todos.length >= 1 ? "active" : ""}>
              ToDo List
            </Link>
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
