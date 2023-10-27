import { useContext } from 'react';
import { navLinks } from '../../../constants/constants';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../utils/context/authContent';

const NavLinks = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6'>
      {navLinks.map(
        (link) =>
          ((isLoggedIn && link.needAuth) ||
            link.needAuth == 'both' ||
            (!isLoggedIn && !link.needAuth) ||
            link.needAuth == 'both') && (
            <NavLink
              key={link.title}
              className='text-white hover:text-copperOrange transition-all ease-in-out'
              to={link.link}
            >
              {link.title}
            </NavLink>
          )
      )}
    </nav>
  );
};

export default NavLinks;
