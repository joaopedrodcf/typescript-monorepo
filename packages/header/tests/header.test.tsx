import { render, screen } from '@testing-library/react';
import { Header } from '../src';

describe('Button', () => {
    test('it renders', () => {
        render(
            <Header
                title="header title"
                links={[{ name: 'home', href: 'localhost:8080/home' }]}
            />
        );

        expect(screen.getByText('header title')).toBeInTheDocument();
    });
});
