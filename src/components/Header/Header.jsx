import React,{useContext, useEffect, useState} from 'react'
import "./header.css"
import Logo from "../../assets/logo.png"
import { catData } from '../../Data/catData'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Category from '../../Pages/Category'
import Details from '../../Pages/Details'
import CartContext from '../../CartContext'
import Cart from '../../Pages/Cart'

function Header() {
  let {state, dispatch}=useContext(CartContext)
  const [scrolltopdata, setscrolltopdata] = useState('');
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if (window.scrollY < 15) {
          setscrolltopdata('');
      } else {
          setscrolltopdata('scrolled');
      }
  });
  },[])
  return (
    < >
      <section className='top'>
        <ul>
          <li>+977 (01) 4378950, 4373134 </li>
        </ul>
        <ul>
          <li>Contact Us</li>
          <li>Delivery</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li><i class="bi bi-person"></i> Register</li>
          <li><i class="bi bi-person"></i> Login</li>
          <li><Link to="/cart">Cart ({state.cartItems.length})</Link></li>
        </ul>
      </section>

      <header className={scrolltopdata}>
        <img className='logo' src={Logo} alt="" />
        <nav>
          <ul>
            <li> <Link to="/">Home</Link></li>
            {catData.map((a) => (
              <li key={a.id}>
                <Link to={`/cat/${a.catname}`}>
                  {a.catname}
                </Link>
              </li>
            ))}

          </ul>
        </nav>
        <form>
          <input />
        </form>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cat/:cid/' element={<Category />} />
        <Route path='/details/:id/' element={<Details />} />
        <Route path='/cart/' element={<Cart />} />
      </Routes>
    </ >
  )
}

export default Header
