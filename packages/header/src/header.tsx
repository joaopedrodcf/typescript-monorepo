import React from 'react';
import { Wrapper, Links } from './styles';

export interface HeaderProps {
    title: string;
    links: ILinks[];
}

interface ILinks {
    name: string;
    href: string;
}

export const Header: React.FC<HeaderProps> = ({ title, links = [] }) => {
    return (
        <Wrapper>
            <a href="/">
                <h1>{title}</h1>
            </a>
            <Links>
                {links.map((x, i) => (
                    <a href={x.href} key={i}>
                        {x.name}
                    </a>
                ))}
            </Links>
        </Wrapper>
    );
};
