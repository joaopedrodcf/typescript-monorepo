import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { App } from './app';

declare global {
    interface Window {
        __APOLLO_STATE__: any;
    }
}

export const client = new ApolloClient({
    // Provide required constructor fields
    cache: window.__APOLLO_STATE__
        ? new InMemoryCache().restore(JSON.parse(window.__APOLLO_STATE__))
        : new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://graphql-pokeapi.graphcdn.app',
        fetch,
    }),

    // Provide some optional constructor fields
    name: 'graphql-pokemon-client',
    version: '1.0',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);
