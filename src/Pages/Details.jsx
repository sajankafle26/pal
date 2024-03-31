import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../Data/productData'

function Details() {
    let {id}=useParams()
    let data=productData.find((a)=>a.id==id)
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.thumbnail}/>
      <p>{data.description}</p>
      <p>Price: {data.price}</p>
    </div>
  )
}

export default Details
