import React, { useContext } from 'react'
import { userAge } from './A'
import D from './D'

function C() {
    let v=useContext(userAge)
  return (
    <div>
      <h1>C comp {v}</h1>
      <D/>
    </div>
  )
}

export default C
