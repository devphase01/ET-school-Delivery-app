import React from 'react';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="app__card">
      <div className="app__card__content">
        <div className="app__card__content-image">
          <img src="https://cdn.cnn.com/cnnnext/dam/assets/220428140436-04-classic-american-hamburgers-full-169.jpg" alt="alt" />
        </div>

        <div className="app__card__content-title">
          {/* {product.name} */} Humburger
        </div>

        <div className="app__card__content-footer">
          <span className="card-price">Price: 5$</span>
          <button className="card-submit">
            Add to cart 
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard