const Category=require('./models/categoryModel')
const ProductDetails = require('./models/productDetailModel')
const MongoDBConnection=require('./config/MongoDBConnection')
const dotenv=require('dotenv')
const port=require('./index')


dotenv.config({ path: './.env' });


MongoDBConnection()


async function addCategory() {
  try {
    
    const docs = [
      { categoryName: "DOOR", categoryImage: `${port}/images/doors.png` },
      { categoryName:"ARTIUM", categoryImage: `${port}/images/artiums.png`  },
      {categoryName:"CURTAIN WALLS", categoryImage: `${port}/images/curtain-wall.png`  },
      {categoryName:"SLIDING DOOR", categoryImage: `${port}/images/sliding-door.png`  },
      {categoryName:"RAILINGS", categoryImage: `${port}/images/railing.png`  },
      {categoryName:"WINDOW", categoryImage: `${port}/images/windows.png`  },
      {categoryName:"PARTIONS", categoryImage: `${port}/images/partions.png`  },
      {categoryName:"SHUTTER", categoryImage: `${port}/images/shutter.pnn`  },
    ];
   
    const result = await Category.insertMany(docs);
    console.log(`${result.length} documents were inserted`);
  } catch (error) {
    console.log(error);
  }
}
//  addCategory()

 async function addDetails() {
  try {
    
    const docs = [
           {
            category:"632b35b17dbaf3b084965fc3",
            productName:"DOOR",
            mainImage:[`${port}/images/main-door1.png`,`${port}/images/main-door2.png`],
            genericDetails:[
              {
                type:'Hinged',
                thermalInsulation:'Yes',
                exteriorShapes:'Flat',
                typeOfHoldingGlazing:'Structural Silicon'
              },
            ],
            topologies:[
              {
                text:'One sach tilt and turn',
                image:`${port}/images/door-pic1.png`
              },
              {
                text:'Tilt and turn with fix light on top',
                image:`${port}/images/door-pic2.png`
              },
              {
                text:'Double tilt and turn window',
                image:`${port}/images/door-pic3.jpg`
              },
              {
                text:'Double tilt and turn window with fixed light',
                image:`${port}/images/door-pic4.png`
              },
              { 
                text:'Hinged door',
                image:`${port}/images/door-pic5.png`
              },
              {
                text:'Double tilt and turn with fanlight',
                image:`${port}/images/door-pic6.png`
              },
              {
                text:'Double tilt and turn with fixed lights sideways',
                image:`${port}/images/door-pic7.png`
              },
              {
                text:'Hinged door inwards',
                image:`${port}/images/door-pic8.png`
              },
              {
                text:'Hinged door inwards/outwards',
                image:`${port}/images/door-pic9.png`
              }
              ,
              {
                text:'Odd number of vents on one side',
                image:`${port}/images/door-pic10.png`
              } ,
              {
                text:'Odd number of vents on both sides',
                image:`${port}/images/door-pic11.png`
              } ,
              {
                text:'Odd number of vents on both sides',
                image:`${port}/images/door-pic12.png`
              } ,
              {
                text:'Odd number of vents on one side',
                image:`${port}/images/door-pic13.png`
              } ,
              {
                text:'Odd number of vents on one side',
                image:`${port}/images/door-pic14.png`
              }
              
            ],
            liveExamples:[`${port}/images/door-live1.jpg`,`${port}/images/door-live2.jpg`,`${port}/images/door-live3.jpg`,`${port}/images/door-live1.jpg`,`${port}/images/door-live2.jpg`]
           },
           {
            category:"632b35b17dbaf3b084965fc4",
            productName:"ARTIUM",
            mainImage:[`${port}/images/artium-main.png`],
            genericDetails:[
              {
                type:'Stick',
                thermalInsulation:'180kg',
                exteriorShapes:'Yes',
                typeOfHoldingGlazing:'Pressure Plate or Structural Silicon'
              },
            ],
            topologies:[
              {
                text:'Skylight with projected window',
                image:`${port}/images/artium-pic1.png`
              },
              {
                text:'Pyramid Skylight',
                image:`${port}/images/artium-pic2.png`
              },
              {
                text:'Polyhedron Skylight',
                image:`${port}/images/artium-pic3.png`
              },
              {
                text:'Skylight (wintergarden)',
                image:`${port}/images/artium-pic4.png`
              },
              { 
                text:'Conservatorium',
                image:`${port}/images/artium-pic5.png`
              },
              
            ],
            liveExamples:[`${port}/images/artiums-live1.jpg`,`${port}/images/artiums-live2.jpg`,`${port}/images/artiums-live3.jpg`,`${port}/images/artiums-live4.jpg`,`${port}/images/artiums-live5.jpg`,`${port}/images/artiums-live6.jpg`,`${port}/images/artiums-live7.jpg`,`${port}/images/artiums-live8.jpg`,`${port}/images/artiums-live9.jpg`,`${port}/images/artiums-live10.jpg`]
           },
           {
            category:"632b35b17dbaf3b084965fc8",
            productName:"WINDOW",
            mainImage:[`${port}/images/window-main1.jpg`,`${port}/images/window-main2.png`],
            genericDetails:[
              {
                type:'Hinged',
                thermalInsulation:'Yes',
                exteriorShapes:'Flat',
                typeOfHoldingGlazing:'Structural Silicon'
              },
            ],
            topologies:[
              {
                text:'One sach tilt and turn',
                image:`${port}/images/window-pic1.png`
              },
              {
                text:'Single tilt and turn with fix light on top',
                image:`${port}/images/window-pic2.png`
              },
              {
                text:'Single tilt ',
                image:`${port}/images/window-pic3.png`
              },
              {
                text:'Double tilt',
                image:`${port}/images/window-pic4.png`
              },
              { 
                text:'Double tilt and turn window with fixed light',
                image:`${port}/images/window-pic5.png`
              },
              {
                text:'Double tilt',
                image:`${port}/images/window-pic6.png`
              },
              {
                text:'Hinged door inwards',
                image:`${port}/images/window-pic7.png`
              },
              {
                text:'Double leaf door inwards',
                image:`${port}/images/window-pic8.png`
              },
              {
                text:'Hinged door inwards',
                image:`${port}/images/window-pic9.png`
              }
              ,
              {
                text:'Hinged door inwards/outwards',
                image:`${port}/images/window-pic10.png`
              } ,
              
            ],
            liveExamples:[`${port}/images/window-live1.jpg`,`${port}/images/window-live2.jpg`,`${port}/images/window-live3.jpg`,`${port}/images/window-live4.jpg`,`${port}/images/window-live5.jpg`,`${port}/images/window-live6.jpg`]
           },
           {
            category:"632b35b17dbaf3b084965fc6",
            productName:"SLIDING DOOR",
            mainImage:[`${port}/images/sliding-main.png`],
            genericDetails:[
              {
                type:'Attached',
                thermalInsulation:'Yes',
                exteriorShapes:'Flat',
                typeOfHoldingGlazing:'Structural Silicon'
              },
            ],
            topologies:[
              {
                text:'Single Sliding',
                image:`${port}/images/sliding-pic1.png.jpg`
              },
              {
                text:'Double Sliding',
                image:`${port}/images/sliding-pic2.jpg`
              },
              
            ],
            liveExamples:[`${port}/images/sliding-live1.jpg`,`${port}/images/sliding-live2.jpeg`,`${port}/images/sliding-live3.jpeg.jpg`,`${port}/images/sliding-live1.jpg`,`${port}/images/sliding-live2.jpeg`]
           },
           {
            category:"632b35b17dbaf3b084965fca",
            productName:"SHUTTER",
            mainImage:[`${port}/images/shutter-main.png`],
            genericDetails:[
              {
                type:'Shutter',
                thermalInsulation:'No',
                exteriorShapes:'Curved',
                typeOfHoldingGlazing:'Structural'
              },
            ],
            topologies:[
              {
                text:'Aluminium foam shutter',
                image:`${port}/images/shutter-pic1.png`
              },
              {
                text:'Aluminium heavy duty shutter',
                image:`${port}/images/shutter-pic2.png`
              },
              {
                text:'Perforated heavy duty shutter',
                image:`${port}/images/shutter-pic3.png`
              },
              {
                text:'Polycarbonate heavy duty shutter',
                image:`${port}/images/shutter-pic4.jpg`
              },
            ],
            liveExamples:[`${port}/images/shutter-live1.png`,`${port}/images/shutter-live2.jpeg`,`${port}/images/shutter-live3.jpg`,`${port}/images/shutter-live4.png`,`${port}/images/shutter-live5.webp`]
           },
           {
            category:"632b35b17dbaf3b084965fc7",
            productName:"RAILINGS",
            mainImage:[`${port}/images/railings-main1.jpg`,`${port}/images/railings-main2.jpg`],
            genericDetails:[
              {
                philosophy:'Continous Profile with simple wedges',
                placementInstallation:'On-floor,side-mounted,embedded,curved',
                use:'Outdoor,Indoor,Seaside',
                application:'modern residence,hotels,office,buildings',
                handRails:"Various Shapes(flat,oval,round,square)",
                maxStructureLength:"unlimited",
                endCovers:"inox and coated aluminium"
              },
            ],
            topologies:[
              {
                text:'With glass',
                image:`${port}/images/railings-pic1.jpg`
              },
              {
                text:'With horizontal bar',
                image:`${port}/images/railings-pic2.jpg`
              },
              {
                text:'With vertical bar',
                image:`${port}/images/railings-pic3.jpg`
              },
            ],
            liveExamples:[`${port}/images/railings-live1.jpg`,`${port}/images/railings-live2.jpg`,`${port}/images/railings-live3.jpg`,`${port}/images/railings-live4.jpg`,`${port}/images/railings-live5.jpg`,`${port}/images/railings-live6.jpg`,`${port}/images/railings-live7.jpg`]
           },
           {
            category:"632b35b17dbaf3b084965fc9",
            productName:"PARTIONS",
            mainImage:[`${port}/images/partions-main.jpg`],
            genericDetails:[
              {
                philosophy:'Partitioning System',
                placementInstallation:'On-floor,side-mounted,embedded,curved',
                use:'Outdoor,Indoor,Seaside',
                application:'Meeting rooms,hotels,office-buildings,airports etc.',
                handRails:"Luminium framed glass panel",
                maxStructureLength:"unlimited" ,
              }
            ],
            topologies:[
              {
                text:'Fixed partition wall',
                image:`${port}/images/partions-pic1.png`
              },
              {
                text:'Fixed partition wall open air',
                image:`${port}/images/partions-pic2.png`
              },
              {
                text:'Fixed partition wall open air',
                image:`${port}/images/partions-pic3.png`
              },
              {
                text:'Fixed partition wall open air',
                image:`${port}/images/partions-pic4.png`
              },
              {
                text:'Fixed partition wall in adjustable angle(90*-180*)',
                image:`${port}/images/partions-pic5.png`
              },
              {
                text:'Fixed partition wall in "T" construction',
                image:`${port}/images/partions-pic6.png`
              },
              {
                text:'Fixed partition wall in cross-shape construction',
                image:`${port}/images/partions-pic7.png`
              },
            ],
            liveExamples:[`${port}/images/partions-live1.jpg`,`${port}/images/partions-live2.jpeg`,`${port}/images/partions-live3.jpg`,`${port}/images/partions-live4.jpg`,`${port}/images/partions-live5.jpg`,`${port}/images/partions-live6.jpg`]
           },
           {
              category:"632b35b17dbaf3b084965fc5",
              productName:"CURTAIN WALL",
              mainImage:[`${port}/images/curtain-main.jpg`],
              genericDetails:[
                {
                  philosophy:'Standard,Structural,Semi-Structural',
                  placementInstallation:'On-floor,side-mounted,embedded',
                  use:'Outdoor',
                  application:'Fixed,Projected,Parallel-Projected',
                  handRails:"Security of visible load",
                  maxStructureLength:"unlimited"
                },
              ],
              topologies:[
                {
                  text:'Tilt and turn Window',
                  image:`${port}/images/curtain-pic1.png`
                },
                {
                  text:'Parallel and Projected outward window',
                  image:`${port}/images/curtain-pic2.png`
                },
                {
                  text:'Hinged opening outward window',
                  image:`${port}/images/curtain-pic3.png`
                },
                {
                  text:'Hinged opening inward window',
                  image:`${port}/images/curtain-pic4.png`
                },
                {
                  text:'Projected outward window',
                  image:`${port}/images/curtain-pic5.png`
                },
                {
                  text:'Parallel Projected outward window',
                  image:`${port}/images/curtain-pic6.png`
                },
                {
                  text:'Fixed Window',
                  image:`${port}/images/curtain-pic7.jpg`
                },
              ],
              liveExamples:[`${port}/images/curtain-live1.jpg`,`${port}/images/curtain-live2.jpg`,`${port}/images/curtain-live3.jpg`,`${port}/images/curtain-live4.jpg`,`${port}/images/curtain-live5.jpg`,`${port}/images/curtain-live6.jpg`]
             },
    ];
   
    const result = await ProductDetails.insertMany(docs);
    console.log(`${result.length} documents were inserted`);
  } catch (error) {
    console.log(error);
  }
}
  addDetails()