import { useState } from 'react';

import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDraw from './SideDraw';

const MainNavigation = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => setMobileNav(!mobileNav);

  return (
    <>
      <SideDraw isOpen={mobileNav}>
        <nav>
          <NavLinks />
        </nav>
      </SideDraw>
      <MainHeader className='sm:flex sm:flex-col sm:items-start md:flex-row'>
        <Link to='/'>
          <h1 className='text-[20px] font-bold sm:mb-4 md:mb-0'>
            Where you've gone?
          </h1>
        </Link>
        <nav className='hidden sm:block'>
          <NavLinks />
        </nav>
        <button
          className='burger'
          onClick={toggleMobileNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
