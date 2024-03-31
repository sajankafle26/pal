import React,{useContext} from 'react'
import CartContext from '../CartContext'

function Cart() {
    let {state, dispatch}=useContext(CartContext)
  return (
    <div>
      



<h1>Shopping Cart</h1>

<div className="shopping-cart">
  <div className="column-labels">
    <label className="product-image">Image</label>
    <label className="product-details">Product</label>
    <label className="product-price">Price</label>
    <label className="product-quantity">Quantity</label>
    <label className="product-removal">Remove</label>
    <label className="product-line-price">Total</label>
  </div>
  {state.cartItems.map((a)=>(
  <div className="product">
    <div className="product-image">
      <img src={a.thumbnail} />
    </div>
    <div className="product-details">
      <div className="product-title">{a.title}</div>
      <p className="product-description">{a.description}</p>
    </div>
    <div className="product-price">{a.price}</div>
    <div className="product-quantity">
      <input type="number" defaultValue={2} min={1} />
    </div>
    <div className="product-removal">
      <button className="remove-product" onClick={()=>dispatch({type:'removefromcart', payload: a})}>
        Remove
      </button>
    </div>
    <div className="product-line-price">25.98</div>
  </div>
   ))}
  
  <button className="checkout">Checkout</button>
</div>

    </div>
  )
}

export default Cart
