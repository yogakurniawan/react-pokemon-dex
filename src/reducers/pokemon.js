import {
  LOAD_POKEMON,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILED,
  LOAD_POKEMON_DETAIL,
  LOAD_POKEMON_DETAIL_SUCCESS,
  LOAD_POKEMON_DETAIL_FAILED
} from 'constants/ActionTypes';

const initialState = {
  loading: false,
  error: null,
  payload: {
    pokemon: [],
    pokemonDetail: null,
    next: 'default'
  }
};

const pokemon = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case LOAD_POKEMON:
      return {
        ...state,
        loading: true
      }
    case LOAD_POKEMON_DETAIL:
      return {
        ...state,
        loading: true
      }
    case LOAD_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        payload: {
          ...state.payload,
          pokemon: [
            ...state.payload.pokemon,
            ...payload.results
          ],
          next: payload.next
        }
      }
    case LOAD_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
        error,
        payload: {
          ...state.payload,
          pokemon: [],
          next: 'default'
        }
      }
    case LOAD_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        payload: {
          ...state.payload,
          pokemonDetail: payload
        }
      }
    case LOAD_POKEMON_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error,
        payload: {
          ...state.payload,
          pokemonDetail: null
        }
      }
    default:
      return state;
  }
};

export default pokemon;
