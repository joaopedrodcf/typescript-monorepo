import type React from 'react';

export interface HeaderProps {
    isLoggedin?: boolean;
}

export const Header: React.VFC<HeaderProps> = ({ isLoggedin = false }) => (
    <header>
        <div>Dogbook</div>
        <div>Home</div>
        <div>Search</div>
        <div>{isLoggedin ? 'dog name' : 'login'}</div>
    </header>
);
