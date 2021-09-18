import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { ListItem, UnorderedList } from './styles';
import { getPokemonsDetails } from './types/getPokemonsDetails';

const GET_POKEMON_DETAILS = gql`
    query getPokemonsDetails {
        pokemons(limit: 150, offset: 0) {
            results {
                url
                name
                image
            }
        }
    }
`;

export const Home: React.FC = () => {
    const { loading, error, data } =
        useQuery<getPokemonsDetails>(GET_POKEMON_DETAILS);
    if (loading) return <p>Loading...</p>;
    if (error || !data || !data.pokemons || !data.pokemons.results)
        return <p>Error :(</p>;

    return (
        <UnorderedList>
            {data.pokemons.results.map((pokemon) => {
                if (!pokemon) {
                    return <>Missing</>;
                }

                return (
                    <ListItem key={pokemon.name}>
                        <p>{pokemon.name}</p>
                        <img
                            src={pokemon.image ?? ''}
                            alt={pokemon.name ?? ''}
                        />
                    </ListItem>
                );
            })}
        </UnorderedList>
    );
};

export default Home;
