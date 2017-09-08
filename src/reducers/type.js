import {
  LOAD_POKEMON_BY_TYPE,
  LOAD_POKEMON_BY_TYPE_SUCCESS,
  LOAD_POKEMON_BY_TYPE_FAILED,
  LOAD_POKEMON_TYPE_SUCCESS,
  SET_FILTER
} from 'constants/ActionTypes';

const initialState = {
  loading: false,
  error: null,
  payload: {
    types: [],
    filter: 'all',
    pokemonByType: []
  }
};

const type = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case SET_FILTER:
      return {
        ...state,
        payload: {
          ...state.payload,
          filter: payload,
        }
      }
    case LOAD_POKEMON_TYPE_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          types: payload.results,
        }
      }
    case LOAD_POKEMON_BY_TYPE:
      return {
        ...state,
        loading: true,
        error: null,
        payload: {
          ...state.payload,
          pokemonByType: [],
        }
      }
    case LOAD_POKEMON_BY_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        payload: {
          ...state.payload,
          pokemonByType: payload.pokemon
        }
      }
    case LOAD_POKEMON_BY_TYPE_FAILED:
      return {
        ...state,
        loading: false,
        error,
        payload: {
          ...state.payload,
          pokemonByType: []
        }
      }
    default:
      return state;
  }
};

export default type;
