import React from 'react';

import './Shop.scss';

import { ProductContainer, Sidebar } from '../../components';

const Shop = () => {
  return (
    <div className="app__shop">
      <Sidebar />
      <ProductContainer />
    </div>
  )
}

export default Shop