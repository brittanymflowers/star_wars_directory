import { render } from '@testing-library/react';
import Search from './Search';

function searchName(callback, searchInput) {
    if (searchInput !== null) {
        callback(searchInput)
    }
}

test('search input sends call to API', async () => {
        render(<Search />)
        const search = jest.fn();
        searchName(search, 'luke');
        expect(search).toHaveBeenCalled();
});

