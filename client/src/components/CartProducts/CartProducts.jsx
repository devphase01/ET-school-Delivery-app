import React, { useState } from 'react';

import './CartProducts.scss';

const CartProducts = () => {
  const [count, setCount] = useState(2);
  const totalPrice = 5 * count;
  return (
    <div className="app__cart-products">
      <div className="app__cart__products-container">
        <div className="app__cart__product">
          <div className="app__cart__product-image">
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/220428140436-04-classic-american-hamburgers-full-169.jpg" alt="alt" />
          </div>

          <div className="app__cart__product-content">
            <div className="app__cart__product-title">
              Humburger
            </div>

            <div className="app__cart__product-price">
              <span className="cart-price">Price: 5{ count > 1 ? `* ${count}` : '' }$</span>
            </div>

            <div className="app__cart__product-setcount">
              <input type="number" value={count > 0 ? count : ""} onChange={(e) => setCount(e.target.value > 0 ? e.target.value : 0)} />
            </div>
          </div>
        </div>
        <div className="app__cart__product">
          <div className="app__cart__product-image">
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/220428140436-04-classic-american-hamburgers-full-169.jpg" alt="alt" />
          </div>

          <div className="app__cart__product-content">
            <div className="app__cart__product-title">
              Humburger
            </div>

            <div className="app__cart__product-price">
              <span className="cart-price">Price: 5{ count > 1 ? `* ${count}` : '' }$</span>
            </div>

            <div className="app__cart__product-setcount">
              <input type="number" value={count > 0 ? count : ""} onChange={(e) => setCount(e.target.value > 0 ? e.target.value : 0)} />
            </div>
          </div>
        </div>
        <div className="app__cart__product">
          <div className="app__cart__product-image">
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/220428140436-04-classic-american-hamburgers-full-169.jpg" alt="alt" />
          </div>

          <div className="app__cart__product-content">
            <div className="app__cart__product-title">
              Humburger
            </div>

            <div className="app__cart__product-price">
              <span className="cart-price">Price: 5{ count > 1 ? `* ${count}` : '' }$</span>
            </div>

            <div className="app__cart__product-setcount">
              <input type="number" value={count > 0 ? count : ""} onChange={(e) => setCount(e.target.value > 0 ? e.target.value : 0)} />
            </div>
          </div>
        </div>
        <div className="app__cart__product">
          <div className="app__cart__product-image">
            <img src="https://cdn.cnn.com/cnnnext/dam/assets/220428140436-04-classic-american-hamburgers-full-169.jpg" alt="alt" />
          </div>

          <div className="app__cart__product-content">
            <div className="app__cart__product-title">
              Humburger
            </div>

            <div className="app__cart__product-price">
              <span className="cart-price">Price: 5{ count > 1 ? `* ${count}` : '' }$</span>
            </div>

            <div className="app__cart__product-setcount">
              <input type="number" value={count > 0 ? count : ""} onChange={(e) => setCount(e.target.value > 0 ? e.target.value : 0)} />
            </div>
          </div>
        </div>
      </div>

      <div className="app__cart-products-submit">
        <button>Pay {totalPrice}$</button>
      </div>
    </div>
  )
}

export default CartProducts