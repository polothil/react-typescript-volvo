import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import './App.css';
import Learn from './components/Learn/Learn';
import Shop from './components/Shop/shop';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/learn/:id' element={<Learn />} />
      <Route path='/shop/:id' element={<Shop />} />
    </Routes>
  );
};

export default App;
