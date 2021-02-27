import React from 'react';

export interface HeaderProps {
    title: string;
    links: ILinks[];
}

interface ILinks {
    name: string;
    href: string;
}

export const Header: React.FC<HeaderProps> = ({ title, links }) => {
    return (
        <div>
            <a href="/">
                <h1>{title}</h1>
            </a>
            <div>
                {links.map((x, i) => (
                    <a href={x.href} key={i}>
                        {x.name}
                    </a>
                ))}
            </div>
        </div>
    );
};
