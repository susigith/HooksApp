import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          useContext
        </Link>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <NavLink
              to='home'
              className={({ isActive, isPending }) => `nav-link
              ${isActive ? 'active' : isPending ? 'pending' : ''}`}
            >
              Home
            </NavLink>

            <NavLink
              to='about'
              className={({ isActive, isPending }) => `nav-link
              ${isActive ? 'active' : isPending ? 'pending' : ''}`}
            >
              About
            </NavLink>

            <NavLink
              to='login'
              className={({ isActive, isPending }) => `nav-link
            ${isActive ? 'active' : isPending ? 'pending' : ''}`}
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
