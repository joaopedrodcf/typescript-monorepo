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
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="Description"
                    content="A template of a monorepo to create a react application."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <meta name="mobile-web-app-capable" content="yes" />

                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta name="apple-mobile-web-app-title" content="Yokaidex" />
                <link
                    rel="apple-touch-icon"
                    href="images/icons/icon-152x152.png"
                />

                <meta
                    name="msapplication-TileImage"
                    content="images/icons/icon-144x144.png"
                />
                <meta name="msapplication-TileColor" content="#fdd835" />

                <meta name="theme-color" content="#000000" />
                <title>
                    Typescript monorepo - A template of a monorepo to create a
                    react application.
                </title>
            </head>
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
