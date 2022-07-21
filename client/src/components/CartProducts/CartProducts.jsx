import React from 'react';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

import CartProductItem from '../CartProductItem/CartProductItem';

import './CartProducts.scss';

const CartProducts = ({ products, decreaceCartHandler, increaseCartHandler }) => {
  const { activeMenu } = useSelector(state => state.menu);
  return (
    <div className="app__cart-products">
      <div className="app__cart__products-container">
        {products && products.length > 0 ? products.map(product => {
          if (product.activeMenu !== activeMenu) return "";
          return (
            <CartProductItem key={uniqid()} product={product} increase={increaseCartHandler} decrease={decreaceCartHandler} />
          )
        }) : <div>Cart is empty.</div>}
      </div>
    </div>
  )
}

export default CartProducts