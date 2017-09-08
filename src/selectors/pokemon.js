import { createSelector } from 'reselect';

const rootState = state => state.pokemon;

export const pokemon = () => createSelector(
  rootState,
  state => state.payload.pokemon
);

export const loadingPokemon = () => createSelector(
  rootState,
  state => state.loading
);

export const errorLoadingPokemon = () => createSelector(
  rootState,
  state => state.error
);

export const nextPokemon = () => createSelector(
  rootState,
  state => state.payload.next
);