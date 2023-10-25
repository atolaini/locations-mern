import { navLinks } from '../../../constants/constants';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <nav className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6'>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          className='text-white hover:text-copperOrange transition-all ease-in-out'
          to={link.link}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
