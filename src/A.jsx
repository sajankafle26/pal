import React, { createContext } from 'react'
import B from './B'

export var userAge=createContext()
function A() {
  return (
    <div>
        <userAge.Provider value="39">
      <h1>A comp</h1>
      <B/>
      </userAge.Provider>
    </div>
  )
}

export default A
