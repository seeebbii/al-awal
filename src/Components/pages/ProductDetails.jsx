import React from 'react'
import "../pages/ProductDetails.css"
import doorimage1 from "../../Assets/front-door.png"
import doorimage2 from "../../Assets/front-door2.png"

const ProductDetails = () => {
  const dooData=[
    {
      name:"one sash titlt and turn",
      imag:require("../../Assets/door-pic3.png"),
    },
    {
      name:"titlt and turn with fix light on top",
      imag:require("../../Assets/door-pic6.png"),
    },
    {
      name:"titlt and turn with fanlight",
      imag:require("../../Assets/door-pic6.png"),
    },
    {
      name:"Double titlt and turn window",
      imag:require("../../Assets/door-pic7.jpg"),
    },
    {
      name:"Double titlt and turn with light",
      imag:require("../../Assets/door-pic2.png"),
    },
    {
      name:"Double titlt and turn window with fixedlight",
      imag:require("../../Assets/door-pic8.png"),
    },
    {
      name:"Double titlt and turn with fanlight",
      imag:require("../../Assets/door-pic9.png"),
    },
    {
      name:"Double titlt and turn with fixedlight sideways",
      imag:require("../../Assets/door-pic10.png"),
    },
  ]
  return (
    <div className='main'>
        <div className='main-div'>
        <p>AL AWAAL DOOR</p>
        <div className='image-div'>
            <img src={doorimage1} alt='doorimage1'></img>
            <img src={doorimage2} alt='doorimage2'></img>
        </div>

        
        </div>
        
        <div className='generic'>
         <p>Generic</p>
         <div className='generic-details'>
            <p>WINDOW TYPES<br></br>Hinged</p>
            <p>THERMAL INSULATION<br></br>Yes</p>
            <p>EXTENSION SHAPES<br></br>Flat</p>
           
         </div>
        </div>

        <div className='typologies'>
        <div className=' typology-heading'>
          <p className='typo'>TYPOLOGIES</p>
          <p className='typo2'>All available typologies</p>          
        </div>
        <div className='typology-details'>
            {
              dooData.map(data=>{
                return <div className='pic-div'><img src={data.imag} alt="doorPic"></img><p>{data.name}</p></div>
              })
            }
        </div>
        </div>
        
    </div>
  )
}

export default ProductDetails