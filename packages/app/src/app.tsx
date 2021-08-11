import React from 'react';
import { Header } from '@typescript-monorepo/header';
import { Global, css } from '@emotion/react';
import { Routes } from './routes';

export const App: React.FC = () => {
    return (
        <div>
            <Global
                styles={css`
                    html {
                        /* font-size:62.5%; */
                    }

                    html * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    body,
                    html,
                    #root {
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        padding: 0;
                    }

                    body {
                        display: flex;
                        flex-direction: column;
                    }

                    *,
                    *::before,
                    *::after {
                        box-sizing: inherit;
                    }

                    a {
                        text-decoration: none;
                    }
                `}
            />
            <Header
                title="Monorepo"
                links={[
                    {
                        href: '/about',
                        name: 'about',
                    },
                    {
                        href: '/contacts',
                        name: 'contacts',
                    },
                ]}
            />
            <Routes />
        </div>
    );
};
