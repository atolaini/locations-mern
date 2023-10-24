import { Route, Routes } from 'react-router-dom';
import './index.css';

import Users from './user/pages/Users';
import NotFound from './shared/pages/404';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation';

function App() {
  return (
    <>
      <MainNavigation />
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
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
