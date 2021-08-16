import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Home from '../src/home';

const mocks: any = [];
describe('Home', () => {
    test('it renders', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Home />
            </MockedProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});
