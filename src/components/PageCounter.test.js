import { render, screen } from '@testing-library/react';
import PageCounter from './PageCounter';

test('should not have more than 9 pages', () => {
    render(<PageCounter />)
    const totalPages = 
    expect(totalPages).toBeLessThan(10)
})