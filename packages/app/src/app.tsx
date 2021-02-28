import React from 'react';
import { Button } from '@dogbook/button';
import { Header } from '@dogbook/header';

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
