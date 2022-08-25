import React from 'react'
import { Link } from 'react-router-dom'
import './HorizontalNav.css'

const HorizontalNav = () => {
  return (
    <div className='horiz-nav'>
        <div><p>PRODUCTS</p></div>
        <div><p style={{marginTop:"530%"}}>WHO ARE WE?</p></div>
        <div><p><Link to="/projects" className='link'>PROJECTS</Link></p></div>
        <div><p><Link to="/contact" className='link'>CONTACT</Link></p></div>
    </div>
  )
}

export default HorizontalNav