import { render, screen } from '@testing-library/react';
import Contacts from '../src/contacts';

describe('Contacts', () => {
    test('it renders', () => {
        render(<Contacts />);

        expect(screen.getByText('Contacts')).toBeInTheDocument();
    });
});
