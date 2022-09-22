import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const PokeSearch = ({ getPokemon }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    search.length === 0
      ? Swal.fire('Search field can"t be empty', "", "error")
      : getPokemon(search.toLowerCase());
  };

  return (
    <div>
      <form className="form__container">
        <p>Search Pokemon's by it's name or ID</p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default PokeSearch;
