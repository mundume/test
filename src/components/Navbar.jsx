import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav >
    <ul >
      <li>
       Home
      </li>
      <li > <Link to= "/addproduct" style={{
        color:'white',
        textDecoration:'none'
      }}>AddProduct</Link>
      </li>
    </ul>
   </nav>
  )
}

export default Navbar