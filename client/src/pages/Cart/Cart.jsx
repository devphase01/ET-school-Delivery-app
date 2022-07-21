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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activeMenu } = useSelector(state => state.menu);
  const { userInfo } = useSelector(state => state.order);
  const { cartTotalAmount, cartItems } = useSelector(state => state.cart);

  const [createOrder] = productApi.useCreateOrderMutation();

  const decreaceCartHandler = (product) => dispatch(decreaseCart(product));
  const increaseCartHandler = (product) => dispatch(addToCart(product));     

  const submitOrderHandler = async () => {
    const filterProducts = cartItems.filter(product => product.activeMenu === activeMenu);

    const userInfoValidate = 
      userInfo.name.length > 0 &&
      userInfo.email.length > 0 &&
      userInfo.phone.length > 0 &&
      userInfo.address.length > 0;
    
    if(userInfoValidate && filterProducts.length > 0) {
      await createOrder({userInfo: userInfo, products: filterProducts, amount: cartTotalAmount});

      localStorage.setItem("cartItems", JSON.stringify([]));
  
      dispatch(resetCart());
      dispatch(resetUserInfo());
  
      navigate("/");
    }
  }

  useEffect(() => {
    const filterByMenu = cartItems.filter(product => product.activeMenu === activeMenu);
    dispatch(getAmount(filterByMenu));
  }, [dispatch, cartItems, activeMenu]);

  return (
    <div className="app__cart">
      <div className="app__cart-content">
        <InputForm />
        <CartProducts products={cartItems} decreaceCartHandler={decreaceCartHandler} increaseCartHandler={increaseCartHandler} />
      </div>
      <div className="app__cart-submit">
        <button onClick={() => submitOrderHandler()}>Pay {cartTotalAmount}$</button>
      </div>
    </div>
  )
}

export default Cart;