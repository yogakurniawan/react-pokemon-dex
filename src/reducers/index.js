import { combineReducers } from 'redux';
import pokemon from './pokemon';
import pokemonType from './pokemonType';
import pokemonDetail from './pokemonDetail';

export default combineReducers({
  pokemonDetail,
  pokemon,
  pokemonType
});
