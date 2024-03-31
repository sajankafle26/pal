import React,{ useReducer } from 'react'
let products=[
    {id:1, pname: "Product 1", price: 20}, {id:2, pname: "Product 2", price: 10}, {id:3, pname: "Product 3", price: 4},
]
let init={ cartItems: []}
let reducer=(state,action)=>{
    switch(action.type)  {
        case 'addtocart': return{ ...state, cartItems:[...state.cartItems,action.payload]}
    }}
function F() {
    let [state, disptach]=useReducer(reducer, init)
  return (
    <div>
        <h2>Product List</h2>
        <ol>
            {products.map((a)=>(
                <li key={a.id}>{a.pname} 
                <button onClick={()=>disptach({type: 'addtocart', payload:a})}> Add to cart</button>
                </li>
            ))}
            </ol>
            <h2>Cart List</h2>
            <ol>
            {state.cartItems.map((a)=>(
                <li key={a.id}>{a.pname}  </li>
            ))}
        </ol>
    </div>
  )
}

export default F
