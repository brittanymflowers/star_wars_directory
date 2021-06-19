import Header from './Header'
import { render, screen } from '@testing-library/react';

describe('test header', () => {
    test('Star Wars Icon renders', () => {
        render(<Header />)
        const starWarsIcon = screen.getByTestId('swlogo')
        expect(starWarsIcon).toBeVisible()
    })
    test('Navbar renders', () => {
        render(<Header />)
        const navbar = screen.getByTestId('navbar')
        expect(navbar).toBeVisible()
    })
    test('click Star Wars Icon link, refreshes page to home screen', () => {
        render(<Header />)
        const starWarsIcon = screen.getByTestId('swlogo')
        expect(starWarsIcon.getAttribute('href')).toBe('/')
    })
})

