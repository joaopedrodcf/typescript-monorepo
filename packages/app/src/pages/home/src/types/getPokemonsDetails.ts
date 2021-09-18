/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemonsDetails
// ====================================================

export interface getPokemonsDetails_pokemons_results {
  __typename: "PokemonItem";
  url: string | null;
  name: string | null;
  image: string | null;
}

export interface getPokemonsDetails_pokemons {
  __typename: "PokemonList";
  results: (getPokemonsDetails_pokemons_results | null)[] | null;
}

export interface getPokemonsDetails {
  pokemons: getPokemonsDetails_pokemons | null;
}
