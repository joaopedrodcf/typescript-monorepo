import { render, screen } from '@testing-library/react';
import NotFound from '../src/not-found';

describe('NotFound', () => {
    test('it renders', () => {
        render(<NotFound />);

        expect(screen.getByText('404 NOT FOUND')).toBeInTheDocument();
    });
});
