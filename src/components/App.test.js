import App from './App'
import { render, screen } from '@testing-library/react';

test('render header', () => {
    render(<App />);
    const header = screen.getByTestId('navbar');
    expect(header).toBeDefined();
});