import React from "react";
import { useState } from "react";
import { fetchPokemon } from "../services/FetchPokemon";
import PokeCard from "./PokeCard";
import PokeSearch from "./PokeSearch";
import Swal from "sweetalert2";

const PokeHome = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  const getPokemon = async (pokemon) => {
    try {
      setLoading(true);
      const response = await fetchPokemon(pokemon);
      const data = await response.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      Swal.fire("Pokemon not found", "Try again with a valid name", "error");
    }
  };

  //   console.log(pokemon);

  return (
    <div>
      <h1>PokeHome</h1>
      <PokeSearch getPokemon={getPokemon} />
      {/* if loadign es true(ya que loading es false del state) and pokemon is true  */}
      {!loading && pokemon ? (
        <PokeCard name={pokemon.name} img={pokemon.sprites.front_default} />
      ) : null}
    </div>
  );
};

export default PokeHome;
