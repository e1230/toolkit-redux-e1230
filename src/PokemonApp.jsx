import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const [numberPage, setNumberPage] = useState(0);
  const dispatch = useDispatch();
  const { isLoading, pokemons } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons(numberPage));
  }, [numberPage]);

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      {isLoading ? (
        <span>loading</span>
      ) : (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}

      <button
        disabled={isLoading}
        onClick={() => {
          setNumberPage(numberPage + 1);
        }}
      >
        Siguiente
      </button>
    </>
  );
};
