import React from 'react';
import GlobalStyles from '../styles/globalStyles';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
}

// GlobalStyles should be imported from the app instead
export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <Story />
        </>
  ),
];