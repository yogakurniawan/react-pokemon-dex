import { combineReducers } from 'redux';
import pokemon from './pokemon';
import type from './type';

export default combineReducers({
  pokemon,
  type
});
