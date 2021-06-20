import { render } from '@testing-library/react';
import Search from './Search';

describe('Send Search requests to database', () => {
    test('onKeyPress triggers search', (e) => {
        render(<Search />);
        const search = jest.fn()
        expect(e.key).toBe('Enter')
        expect(search).toHaveBeenCalled()
        })
    });
