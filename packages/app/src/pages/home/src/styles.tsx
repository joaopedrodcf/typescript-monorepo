import styled from '@emotion/styled';

export const UnorderedList = styled('ul')`
    padding: 12px;
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const ListItem = styled('li')`
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
        text-transform: capitalize;
    }
`;
