import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productData } from '../Data/productData'
import CartContext from '../CartContext'

function Category() {
  let {state, dispatch}=useContext(CartContext)
    let {cid}=useParams()
    let bb=productData.filter((a)=>a.category==cid)
    //console.log(state.cartItems)
  return (
    <div>
      <h2>Category {cid}</h2>

      <section className='products'>
         
          <div className="flex">
            {bb.map((a)=>(
 <div className="pbox" key={a.id}>
  <img src={a.thumbnail} alt="" />
  <h5>{a.title}</h5>
  <Link className='btn' to={`/details/${a.id}`}>Read More</Link>
  <button className='btn' onClick={()=>dispatch({type: 'addtocart', payload: a})}>Add To Cart</button>
 </div>
            ))}
           
          </div>
       </section>
    </div>
  )
}

export default Category
