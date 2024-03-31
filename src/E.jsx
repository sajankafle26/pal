import React, { useReducer } from 'react'
import F from './F'
let reducer=(state, action)=>{
    switch(action.type)
    {
        case 'inc': return{ count: state.count+1}
        case 'desc': return{ count: state.count-1}
    }
}
function E() {
    let [state, disptach]=useReducer(reducer, {count: 10})
  return (
    <div>
      <h1>React useReducer Hook</h1>
      <h2>{state.count}</h2>
      <button onClick={()=>disptach({type: 'inc'})}>++</button>
      <button onClick={()=>disptach({type: 'desc'})}>--</button>
      <F/>
    </div>
  )
}
export default E
