import {
  LOAD_POKEMON_DETAIL,
  LOAD_POKEMON_DETAIL_SUCCESS,
  LOAD_POKEMON_DETAIL_FAILED
} from 'constants/ActionTypes';

const initialState = {
  loading: false,
  error: null,
  payload: null
};

const pokemonDetail = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case LOAD_POKEMON_DETAIL:
      return {
        ...state,
        loading: true
      }
    case LOAD_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        payload
      }
    case LOAD_POKEMON_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error,
        payload: null,
      }
    default:
      return state;
  }
};

export default pokemonDetail;
