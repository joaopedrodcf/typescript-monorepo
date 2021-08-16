import { render, screen } from '@testing-library/react';
import About from '../src/about';

describe('About', () => {
    test('it renders', () => {
        render(<About />);

        expect(screen.getByText('About')).toBeInTheDocument();
    });
});
