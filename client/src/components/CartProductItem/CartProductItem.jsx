import React from 'react';

import './CartProductItem.scss';

const CartProductItem = ({ product, increase, decrease }) => {

  return (
    <div className="app__cart__product">
      <div className="app__cart__product-image">
        <img src={product.icon} alt="alt" />
      </div>

      <div className="app__cart__product-content">
        <div className="app__cart__product-title">
          {product.name}
        </div>

        <div className="app__cart__product-price">
          <span className="cart-price">Price: {product.price * product.cartQuantity}$</span>
        </div>

        <div className="app__cart__product-setcount">
          <button onClick={() => decrease(product)}>-</button>
          <div>{product.cartQuantity}</div>
          <button onClick={() => increase(product)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartProductItem