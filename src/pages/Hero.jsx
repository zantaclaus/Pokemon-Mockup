import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/hero.css";

function Hero(props) {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPokemons, setLoadPokemons] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=40"
  );

  const fetch = async () => {
    const res = await axios.get(loadPokemons);
    setLoadPokemons(res.data.next);

    const pokemons = res.data.results;
    const getPokemonData = (pokemons) => {
      pokemons.forEach(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        setAllPokemons((currentPokemon) => [...currentPokemon, res.data]);
      });
    };
    getPokemonData(pokemons);
  };

  useEffect(() => {
    fetch();
  }, []);

  allPokemons.sort(function (a, b) {
    return a.id - b.id || a.name.localeCompare(b.name);
  });

  return (
    <React.Fragment>
      <div className="hero__header">
        <h1>POKEDEX</h1>
      </div>
      <div className="hero__content">
        {allPokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            image={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          />
        ))}
      </div>
      <div className="hero__btn">
        <button className="hero__botton" onClick={fetch}>
          Lode More...
        </button>
      </div>
    </React.Fragment>
  );
}

export default Hero;
