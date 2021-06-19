import { Navbar, NavbarBrand } from 'reactstrap'

function Header() {

// I chose to go very simple with the header component since there wasn't much need for navigation or anything.

  return (
    <div data-testid='navbar'>
      <Navbar className='navbar'>
        <div className='container'>
            <NavbarBrand href='/' data-testid='swlogo'>
              <img src='/starwars.png' height='100' alt='Star Wars Logo' />
            </NavbarBrand>
        </div>
      </Navbar>
    </div>
  )
}

export default Header
