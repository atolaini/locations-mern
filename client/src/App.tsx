import { useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';

import Users from './user/pages/Users';
import NotFound from './shared/pages/404';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import Auth from './user/pages/Auth';
import { AuthContext } from './utils/context/authContent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
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
            path='auth'
            element={<Auth />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
