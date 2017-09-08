import { combineReducers } from 'redux';
import pokemon from './pokemon';
import type from './type';
import pokemonDetail from './pokemonDetail';

export default combineReducers({
  pokemonDetail,
  pokemon,
  type
});
