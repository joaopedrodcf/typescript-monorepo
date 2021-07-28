import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { loadableReady } from '@loadable/component';
import { App } from './app';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://graphql-pokeapi.graphcdn.app',
    fetch,
});

export const client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    link: link,

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

loadableReady(() => {
    ReactDOM.hydrate(
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>,
        document.getElementById('root')
    );
});
