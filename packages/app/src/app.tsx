import React from 'react';
import { Header } from '@typescript-monorepo/header';
import { Routes } from './routes';
import GlobalStyles from './styles/globalStyles';

const links = [
    {
        href: '/about',
        name: 'about',
    },
    {
        href: '/contacts',
        name: 'contacts',
    },
];

export const App: React.FC = () => {
    return (
        <div>
            <GlobalStyles />
            <Header title="Monorepo" links={links} />
            <Routes />
        </div>
    );
};
