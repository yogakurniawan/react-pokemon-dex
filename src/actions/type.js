import axios from 'axios';
import { LOAD_POKEMON_BY_TYPE, LOAD_POKEMON_TYPE, SET_FILTER } from 'constants/ActionTypes';
import { BASE_API_URL } from 'constants/index';

const POKEMON_TYPE_API = `${BASE_API_URL}type/`;

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  }
}

export function getPokemonListByType(type) {
  return {
    type: LOAD_POKEMON_BY_TYPE,
    promise: axios.get(`${POKEMON_TYPE_API}${type}/`).then(response => response.data)
  };
}

export function getPokemonType() {
  return {
    type: LOAD_POKEMON_TYPE,
    promise: axios.get(`${POKEMON_TYPE_API}`).then(response => response.data)
  };
}