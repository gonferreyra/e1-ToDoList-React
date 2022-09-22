
const url = "https://pokeapi.co/api/v2/pokemon"

export const fetchPokemon = (pokemon) => {
    return fetch(`${url}/${pokemon}`)
};