import { createSelector } from 'reselect';

const pokemonState = state => state.pokemon;
const typeState = state => state.type;

// List of All Pokemon
export const pokemon = () => createSelector(
  pokemonState,
  state => state.payload.pokemon
);

export const loadingPokemon = () => createSelector(
  pokemonState,
  state => state.loading
);

export const errorLoadingPokemon = () => createSelector(
  pokemonState,
  state => state.error
);

export const nextPokemon = () => createSelector(
  pokemonState,
  state => state.payload.next
);

export const pokemonDetail = () => createSelector(
  pokemonState,
  state => state.payload.pokemonDetail
);

// List of Pokemon by Type
export const pokemonByType = () => createSelector(
  typeState,
  state => state.payload.pokemonByType
);

export const loadingPokemonByType = () => createSelector(
  typeState,
  state => state.loading
);

export const errorLoadingPokemonByType = () => createSelector(
  typeState,
  state => state.error
);

// List of Pokemon Types
export const pokemonTypes = () => createSelector(
  typeState,
  state => state.payload.types
);

// Filter Value based on Pokemon Type
export const filter = () => createSelector(
  typeState,
  state => state.payload.filter
);