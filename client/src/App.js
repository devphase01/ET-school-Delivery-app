import { Routes, Route } from 'react-router-dom';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import { Cart, Shop, History, Coupons } from './pages';

import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="app">
      <ToastContainer limit={5}/>
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