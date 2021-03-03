import React from 'react';
import { Header as DogBookHeader } from '@typescript-monorepo/header';

export interface HeaderProps {
    title: string;
    links: ILinks[];
}

interface ILinks {
    name: string;
    href: string;
}

export const Header: React.FC<HeaderProps> = ({ title, links }) => {
    return <DogBookHeader title={title} links={links} />;
};
