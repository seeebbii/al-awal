import React from 'react'
import './Bottom_mob_Nav.css'
import {Link} from "react-router-dom"
const Bottom_mob_Nav = () => {
  return (
    <div className='bottom-nav'>
      <Link to='/products' className='link'>PRODUCTS</Link>
      <Link to='whoarewe' className='link'>WHO ARE WE</Link>
      <Link to='/projects' className='link'>PROJECTS</Link>
      <Link to='/contact' className='link'>CONTACT</Link>
      </div>
  )
}

export default Bottom_mob_Nav