import { render, screen } from '@testing-library/react';
import { Button } from '..';

describe('Button', () => {
    test('it renders', () => {
        const label = 'click me';
        render(<Button>{label}</Button>);

        expect(screen.getByText(label)).toBeInTheDocument();
    });
});
