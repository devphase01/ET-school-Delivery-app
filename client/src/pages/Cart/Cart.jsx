import React from 'react'
import CartProducts from '../../components/CartProducts/CartProducts'
import InputForm from '../../components/InputForm/InputForm'

const Cart = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
      <InputForm />
      <CartProducts />
    </div>
  )
}

export default Cart