import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Coupons from './pages/Coupons';
import History from './pages/History';

import Shop from './pages/Shop';
import ShopingCart from './pages/ShopingCart';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/cart" element={<ShopingCart />}></Route>
        
        {/* Later */}
        <Route path="/coupons" element={<Coupons />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </div>
  )
}

export default App