import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CartProducts from '../../components/CartProducts/CartProducts';
import InputForm from '../../components/InputForm/InputForm';

import { productApi } from '../../app/service/ProductService';

import { useDispatch, useSelector } from 'react-redux';

import './Cart.scss';
import { addToCart, decreaseCart, getAmount, resetCart } from '../../app/reducers/Cart';
import { resetUserInfo } from '../../app/reducers/UserOrder';

const Cart = () => {
  const navigate = useNavigate();

  const cartAmount = useSelector(state => state.cart.cartTotalAmount);
  const { userInfo } = useSelector(state => state.order);
  const [createOrder] = productApi.useCreateOrderMutation();

  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.cartItems);
  const { activeMenu } = useSelector(state => state.menu);


  const decreaceCartHandler = (product) => {
    dispatch(decreaseCart(product));
  }

  const increaseCartHandler = (product) => {
    dispatch(addToCart(product));     
  }

  const submitOrderHandler = async () => {
    const filterProducts = products.filter(product => product.activeMenu === activeMenu);

    const userInfoValidate = 
      userInfo.name.length > 0 &&
      userInfo.email.length > 0 &&
      userInfo.phone.length > 0 &&
      userInfo.address.length > 0;
    
    if(userInfoValidate && products.length > 0) {
      await createOrder({userInfo: userInfo, products: filterProducts, amount: cartAmount});
  
      dispatch(resetCart());
      dispatch(resetUserInfo());
  
      navigate("/");
    }
  }

  useEffect(() => {
    const filterByMenu = products.filter(product => product.activeMenu === activeMenu);
    dispatch(getAmount(filterByMenu));
  }, [dispatch, products, activeMenu]);

  return (
    <div className="app__cart">
      <div className="app__cart-content">
        <InputForm />
        <CartProducts products={products} decreaceCartHandler={decreaceCartHandler} increaseCartHandler={increaseCartHandler} />
      </div>
      <div className="app__cart-submit">
        <button onClick={() => submitOrderHandler()}>Pay {cartAmount}$</button>
      </div>
    </div>
  )
}

export default Cart;