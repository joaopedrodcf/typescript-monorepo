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
import { ChunkExtractor } from '@loadable/server';
import * as path from 'path';

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

const statsFile = path.resolve('../app/dist/loadable-stats.json');

const html = ({
    content,
    extractor,
}: {
    content: string;
    extractor: any;
}) => `<!doctype html>
<html>
  <body>
    <div id="app">${content}</div>
    ${extractor.getScriptTags()}
  </body>
</html>`;

function ssrHandler(req: express.Request, res: express.Response) {
    const extractor = new ChunkExtractor({ statsFile });
    const Content = (
        <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </ApolloProvider>
    );

    const content = ReactDOMServer.renderToString(
        extractor.collectChunks(Content)
    );

    res.status(200).end(html({ content, extractor }));

    // missing renderDataFromTree from apollo
}
