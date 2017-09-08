import { createSelector } from 'reselect';

const rootState = state => state.pokemonDetail;

export const loadingPokemonDetail = () => createSelector(
  rootState,
  state => state.loading
);

export const pokemonDetail = () => createSelector(
  rootState,
  state => state.payload
);