import React from 'react'
import '../Components/Main.css'
import ContactUS from './ContactUS'
import Products from './Products'
import Projects from './Projects'
import WhoAreWe from './WhoAreWe'

const Main = () => {
  return (
    <React.Fragment>
        <div className='main-div'>
            
            <div className='inner-main-div'>
            <div className='main-img1'></div>
            <div className='main-img2'></div>
            </div>
            <div className='right-horizontal-nav'>
            <div><p>PRODUCTS</p></div>
            <div><p>WHO ARE WE?</p></div>
            <div><p>PROJECTS</p></div>
            <div><p>CONTACT</p></div>
             
            
            </div>

        </div>
    </React.Fragment>
  )
}

export default Main