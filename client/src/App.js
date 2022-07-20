import { Routes, Route } from 'react-router-dom';

import './App.scss';

import { Cart, Shop, History, Coupons } from './pages';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        
        {/* Later */}
        <Route path="/coupons" element={<Coupons />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>
    </div>
  )
}

export default App