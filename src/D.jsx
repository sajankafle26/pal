import React, { useRef } from 'react'
import E from './E'

function D() {
    let a=useRef(null)
    let abc=()=>{
         a.current.focus()
         console.log(a)
    }
  return (
    <div>
      <h1>React useRef Hook</h1>
      <input ref={a}/>
      <button onClick={abc}>send</button>
      <E/>
    </div>
  )
}

export default D
