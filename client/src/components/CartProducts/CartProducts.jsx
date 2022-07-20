import React from 'react';
import uniqid from 'uniqid';

import CartProductItem from '../CartProductItem/CartProductItem';

import './CartProducts.scss';

const CartProducts = ({ products, decreaceCartHandler, increaseCartHandler }) => {

  return (
    <div className="app__cart-products">
      <div className="app__cart__products-container">
        {products && products.length > 0 ? products.map(product => (
        <CartProductItem key={uniqid()} product={product} increase={increaseCartHandler} decrease={decreaceCartHandler}/>
        )) : <div>Cart is empty.</div>}
      </div>
    </div>
  )
}

export default CartProducts