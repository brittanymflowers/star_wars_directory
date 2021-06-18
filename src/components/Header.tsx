import { Navbar, NavbarBrand } from 'reactstrap'

function Header() {

  return (
    <div>
      <Navbar className='navbar navbar-dark'>
        <div className='container'>
            <NavbarBrand className='ml-4' href='/'>
                <img src='/starwars.png' height='100' alt='Star Wars Logo' />
            </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default Header
