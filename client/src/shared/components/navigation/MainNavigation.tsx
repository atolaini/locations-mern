import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className='burger'>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Link to='/'>
        <h1 className='text-[20px] font-bold'>Where you've gone?</h1>
      </Link>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
