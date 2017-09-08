import axios from 'axios';
import { LOAD_POKEMON, LOAD_POKEMON_DETAIL } from 'constants/ActionTypes';
import { BASE_API_URL } from 'constants/index';

const POKEMON_API = `${BASE_API_URL}pokemon/`;

export function getPokemonList(offset) {
  return {
    type: LOAD_POKEMON,
    promise: axios.get(`${POKEMON_API}?offset=${offset}`).then(response => response.data)
  };
}

export function getPokemonDetail(id) {
  return {
    type: LOAD_POKEMON_DETAIL,
    promise: axios.get(`${POKEMON_API}${id}`).then(response => response.data)
  };
}