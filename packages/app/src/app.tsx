import React from 'react';
import { Header } from '@typescript-monorepo/header';
import { NavLink } from 'react-router-dom';
import { Routes } from './routes';

export const App: React.FC = () => {
    return (
        <div>
            <Header
                title="Monorepo home"
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
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
            </ul>
            <Routes />
        </div>
    );
};
