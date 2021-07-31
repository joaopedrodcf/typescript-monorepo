import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';

import React from 'react';

const GET_POKEMON_DETAILS = gql`
    {
        pokemons(limit: 300, offset: 0) {
            results {
                url
                name
                image
            }
        }
    }
`;

const List = styled('ul')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const ListChild = styled('li')`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Label = styled('div')`
    font-size: 1.6rem;
`;

export const Home: React.FC = () => {
    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <List>
            {data.pokemons.results.map((x: any) => (
                <ListChild key={x.name}>
                    <img src={x.image} alt={x.name} />
                    <Label>{x.name}</Label>
                </ListChild>
            ))}
        </List>
    );
};

export default Home;
