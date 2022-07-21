import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getAmount } from '../../app/reducers/Cart';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { activeMenu } = useSelector(state => state.menu);
  const { cartItems } = useSelector(state => state.cart);

  const addCartHandler = () => {
    dispatch(addToCart({...product, activeMenu}));

    const filterByMenu = cartItems.filter(item => item.activeMenu === activeMenu);
    dispatch(getAmount(filterByMenu));
  }

  return (
    <div className="app__card">
      <div className="app__card__content">
        <div className="app__card__content-image">
          <img src={product.icon} alt="alt" />
        </div>

        <div className="app__card__content-title">
          {product.name} 
        </div>

        <div className="app__card__content-footer">
          <span className="card-price">Price: {product.price}$</span>
          <button className="card-submit" onClick={() => addCartHandler()}>
            Add to cart 
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard