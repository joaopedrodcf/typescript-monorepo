import React from 'react';
import { Button } from '@typescript-monorepo/button';
import { Header } from '@typescript-monorepo/header';

export interface AppProps {
    text: string;
}

export const App: React.FC<AppProps> = () => {
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
            <Button>my monorepo button</Button>
        </div>
    );
};
