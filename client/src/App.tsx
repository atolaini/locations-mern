import { Route, Routes } from 'react-router-dom';
import './index.css';

import Users from './user/pages/Users';
import NotFound from './shared/pages/404';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
    <>
      <MainNavigation />
      <main className='p-6'>
        <Routes>
          <Route
            path='/'
            element={<Users />}
          />
          <Route
            path='/places/new'
            element={<NewPlace />}
          />
          <Route
            path='/:userId/places'
            element={<UserPlaces />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
