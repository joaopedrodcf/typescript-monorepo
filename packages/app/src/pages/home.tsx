import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { ListItem, UnorderedList } from './styles';

const GET_POKEMON_DETAILS = gql`
    {
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
    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <UnorderedList>
            {data.pokemons.results.map((x: any) => (
                <ListItem key={x.name}>
                    <p>{x.name}</p>
                    <img src={x.image} alt={x.name} />
                </ListItem>
            ))}
        </UnorderedList>
    );
};

export default Home;
