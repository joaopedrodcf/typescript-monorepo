import type React from 'react';
import { Main } from '@sample/components';
import { Button } from '@sample/button';
import { Header } from './header';
export interface AppProps {
    text: string;
}

export const App: React.VFC<AppProps> = ({ text }) => (
    <>
        <Header />
        <Main text={text} />
        <Button text={text} />
    </>
);
