import React from 'react';

import { ProductCard } from '../';

import './ProductContainer.scss';

const ProductContainer = () => {
  return (
    <div className="app__product-container">
      <div className="app__product-container-cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductContainer;