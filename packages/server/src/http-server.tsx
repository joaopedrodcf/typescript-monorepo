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
import { getDataFromTree } from '@apollo/client/react/ssr';
import * as path from 'path';

export const Html = ({ content, state }: any) => {
    return (
        <html lang="en">
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__APOLLO_STATE__=${JSON.stringify(
                            state
                        ).replace(/</g, '\\u003c')};`,
                    }}
                />
            </body>
        </html>
    );
};

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
    const app = (
        <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>{' '}
        </ApolloProvider>
    );

    getDataFromTree(app).then((content) => {
        // Extract the entirety of the Apollo Client cache's current state
        const initialState = client.extract();

        // Add both the page content and the cache state to a top-level component
        const html = <Html content={content} state={initialState} />;

        // Render the component to static markup and return it
        res.status(200);
        res.send(
            `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`
        );
        res.end();
    });
}
