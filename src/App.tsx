import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATH } from './constants/router-path';
import Home from './pages/home';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTER_PATH.HOME} element={<Home />} />
    </Routes>
  );
};

export default App;
