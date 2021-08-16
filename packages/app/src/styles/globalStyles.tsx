import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyles: React.FC = () => {
    return (
        <Global
            styles={css`
                html {
                    //font-size: 62.5%;
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
    );
};

export default GlobalStyles;
