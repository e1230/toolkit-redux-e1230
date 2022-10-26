import { pokemonApi } from "../../../api/PokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //TODO: Realizar petición HTTP
    const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)


    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
}