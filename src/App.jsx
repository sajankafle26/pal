import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import A from './A'
import { CartProvider } from './CartContext'

function App() {
  return (
    < >
    <CartProvider>
      <Header/>
      <Footer/>
      </CartProvider>
    </ >
  )
}

export default App
