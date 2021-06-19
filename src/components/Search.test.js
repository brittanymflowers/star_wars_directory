import { render } from '@testing-library/react';
import Search from './Search';

describe('Send Search requests to database', () => {
    test('onKeyPress triggers search', () => {
        render(<Search />);
    });
})