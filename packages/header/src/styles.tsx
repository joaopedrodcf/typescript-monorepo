import styled from '@emotion/styled';

export const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(22, 27, 34);
    padding: 16px 24px;

    h1 {
        color: #fff;
        font-size: 2rem;
    }
`;

export const Links = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
        margin: 0 12px;
        color: #fff;
        font-size: 1.6rem;
        text-transform: capitalize;
    }
`;
