/* eslint-disable testing-library/render-result-naming-convention */
import express from 'express';
import compression from 'compression';
import ReactDOMServer from 'react-dom/server';
import { App } from '@typescript-monorepo/app';
import { StaticRouter } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';
import * as fs from 'fs';
import * as path from 'path';

export const client = new ApolloClient({
    // Provide required constructor fields
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://graphql-pokeapi.graphcdn.app',
        fetch,
    }),
    ssrMode: true,
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

export function createHttpServer(): express.Express {
    const app = express();

    app.use(compression());
    app.use('/dist', express.static(path.resolve('../app/dist/')));

    app.use(ssrHandler);

    return app;
}

function ssrHandler(req: express.Request, res: express.Response) {
    const indexFile = path.resolve('../app/dist/index.html');

    const app = ReactDOMServer.renderToString(
        <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>{' '}
        </ApolloProvider>
    );

    // missing renderDataFromTree from apollo

    fs.readFile(indexFile, 'utf8', (err: any, data: any) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root" data-ssr>${app}</div>`
            )
        );
    });
}
