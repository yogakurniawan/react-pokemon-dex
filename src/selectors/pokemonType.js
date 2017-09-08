import { createSelector } from 'reselect';

const rootState = state => state.type;

// List of Pokemon by Type
export const pokemonByType = () => createSelector(
  rootState,
  state => state.payload.pokemonByType
);

export const loadingPokemonByType = () => createSelector(
  rootState,
  state => state.loading
);

export const errorLoadingPokemonByType = () => createSelector(
  rootState,
  state => state.error
);

// List of Pokemon Types
export const pokemonTypes = () => createSelector(
  rootState,
  state => state.payload.types
);

// Filter Value based on Pokemon Type
export const filter = () => createSelector(
  rootState,
  state => state.payload.filter
);