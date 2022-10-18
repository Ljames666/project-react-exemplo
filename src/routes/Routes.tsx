import { Routes, Route } from 'react-router-dom';
import Home from '../page/home/Home';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesApp;
