import React from 'react';
import { useSelector } from 'react-redux';

import { ProductCard } from '../';
import { productApi } from '../../app/service/ProductService';

import './ProductContainer.scss';

const ProductContainer = () => {
  const activeMenu = useSelector(state => state.menu.activeMenu);
  const {data: products, isLoading, error} = productApi.useGetProductsQuery(activeMenu);
  
  return (
    <div className="app__product-container">
      <div className="app__product-container-cards">
        {isLoading && <div>Loading...</div>}
        {products && products[0].products.map(product => <ProductCard key={product.name} product={product}/> )}
        {error && <div>{error}</div>}
      </div>
    </div>
  )
}

export default ProductContainer;