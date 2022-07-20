import React, { useEffect } from 'react';
import CartProducts from '../../components/CartProducts/CartProducts';
import InputForm from '../../components/InputForm/InputForm';

import { useDispatch, useSelector } from 'react-redux';

import './Cart.scss';
import { addToCart, decreaseCart, getAmount } from '../../app/reducers/Cart';

const Cart = () => {
  const cartAmount = useSelector(state => state.cart.cartTotalAmount);

  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.cartItems);

  const decreaceCartHandler = (product) => {
    dispatch(decreaseCart(product));
    dispatch(getAmount());
  }

  const increaseCartHandler = (product) => {
    dispatch(addToCart(product));
    dispatch(getAmount());
  }

  useEffect(() => {
    dispatch(getAmount());
  }, [dispatch, products])

  return (
    <div className="app__cart">
      <div className="app__cart-content">
        <InputForm />
        <CartProducts products={products} decreaceCartHandler={decreaceCartHandler} increaseCartHandler={increaseCartHandler} />
      </div>
      <div className="app__cart-submit">
        <button>Pay {cartAmount}$</button>
      </div>
    </div>
  )
}

export default Cart