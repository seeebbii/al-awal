import React from 'react'
import "../pages/Products.css"
import imageFold1 from "../../Assets/folding1.png"
import imageFold2 from "../../Assets/folding2.png"
import imageFold3 from "../../Assets/folding3.png"
import imageFold4 from "../../Assets/folding4.png"

const Products = () => {
  return (
    <div className='product-main-div'>
       <div className="products-text">
         <div className='main-text'>
          <p className='text-upper'>EXCLUSIVE DOOR<br></br><br></br>
          <span className='text-lower' >MAIN</span><br></br><span style={{fontSize:"320%"}}>PRODUCTS</span></p>

         </div>

           <div className='allproduct-text'>
            <p>VIEW ALL OUR PRODUCTS</p>
           </div>

           <div className='quality-text'>
            <p>GUARANTEES<br></br>CONSISTENTLY HIGH <br></br>QUALITY WITHOUT<br></br>OVERPAYMENTS</p>
           </div>
       </div>

       <div className='products-image'>

          <div className='folding-1'>
          <p>FOLDING DOOR</p>
           <div className='img-main-div'>
            <img src={imageFold1} alt="folding-pic1" className='folding-image1'/>
            
           </div>
           </div>

           <div className='folding-1'>
          <p>ALUMINIUM WINDOW</p>
           <div className='img-main-div'>
            <img src={imageFold2} alt="folding-pic1" className='folding-image2'/>
            
           </div>
           </div>


           <div className='folding-1'>
          <p>ALUMINIUM DOOR</p>
           <div className='img-main-div'>
            <img src={imageFold3} alt="folding-pic1" className='folding-image3'/>
            
           </div>
           </div>


           <div className='folding-1'>
          <p>SLIDING DOOR</p>
           <div className='img-main-div'>
            <img src={imageFold4} alt="folding-pic1" className='folding-image4'/>
            
           </div>
           
           </div>
           
           <div className='more'>VIEW-MORE</div>

       </div>
    </div>
  )
}

export default Products