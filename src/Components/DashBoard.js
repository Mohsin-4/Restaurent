// <<<<<<< Updated upstream
import React, { useState } from 'react';
import './Dashboard.css'
import image1 from '../Assets/beryani.webp';
import image2 from '../Assets/chicken-karahi-1.jpg';
import image3 from '../Assets/BBQ.jpg';
import image4 from '../Assets/handi.jpg';
import image5 from '../Assets/chapliKabab.jpg';
import image6 from '../Assets/fishGrill.jpg';
import image7 from '../Assets/daalMash.jpg';
import image8 from '../Assets/kabaliPulao.jpg';
// import image2 from '../Assets/chicken-karahi-1.jpg';


function DashBoard(props) {
  let initStatet = {
    products: [
      { id: 1, img: image1, name: "Biryani", price: "300", qty:1, count:0 },
      { id: 2, img: image2, name: "Chicken Karahi", price: "1300", qty:1,count:0 },
      { id: 3, img: image3, name: "Chicken BBQ", price: "1000", qty:1,count:0 },
      { id: 4, img: image4, name: "Chicken Handi", price: "1500", qty:1,count:0 },
      { id: 5, img: image5, name: "Chapli Kabab", price: "500", qty:1,count:0 },
      { id: 6, img: image6, name: "Fish Grill", price: "900", qty:1,count:0 },
      { id: 7, img: image6, name: "Fish Grill", price: "900", qty:1,count:0 },
      { id: 8, img: image7, name: "Dall Mash", price: "200", qty:1,count:0 },
      { id: 9, img: image8, name: "Kabli pulao", price: "500", qty:1,count:0 },

    ]
  }
  const [state, setState] = useState(initStatet);
  
  const addItemHandler = (product) => {
    let updateRecord = state.products.map((X, i) => {
      if(X.id === product.id){
        X.count = X.count + 1;
        return X;
      } else return X;
    });
    setState(pre => ({...pre, products: updateRecord}));
    props.addItemToCart(product);
  }
  return (
    <div>
      <h1>Order your food</h1>
      <div className="container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'stretch', flexWrap: 'wrap' }}>
        {
          state.products.map((product, index) => {
            return (
              <div key={index} className="card" style={{
                height: 500,
                maxWidth: 300,
                backgroundColor: '#fff',
                borderRadius: 10,
                borderWidth: 0.5,
                borderStyle: "solid",
                borderColor: "rgba(0, 0,0,0.1)",
                margin: 10,
                cursor: "pointer"

              }}
                onClick={() => addItemHandler(product) }
              >

                <div className="card-inside" style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <img style={{
                    maxWidth: 300,
                    width: 300,
                    height: 350,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,

                  }} className="img-div" src={product.img} />
                  <h4>{product.name}</h4>
                  <h4>{product.price}</h4>
                  <h4>{product.count}</h4>
                </div>
              </div>
            )
          })
        }

      </div>

    </div >
  );
      }
export default DashBoard


// =======
// import React from 'react'

// function DashBoard() {
//   return (
//     <div>
//      <p>line added</p> 
//     </div>
//   )
// }

// export default DashBoard

// import React, { useState } from "react";
// import DashBoard from './DashBoard';

// function DashBoard() {
//   const [image, setImage] = useState({ preview: "", raw: "" });

//   const handleChange = e => {
//     if (e.target.files.length) {
//       setImage({
//         preview: URL.createObjectURL(e.target.files[0]),
//         raw: e.target.files[0]
//       });
//     }
//   };

//   const handleUpload = async e => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image", image.raw);

//     await fetch("YOUR_URL", {
//       method: "POST",
//       headers: {
//         "Content-Type": "multipart/form-data"
//       },
//       body: formData
//     });
//   };

//   return (
//     <div>

//     <div>
//       <div>
//         <div>
//           <div>

//           </div>
//         </div>
//       </div>
//     </div>

//       <label htmlFor="upload-button">
//         {image.preview ? (
//           <img src={image.preview} alt="dummy" width="600" height="600" />
//         ) : (
//           <>
//             <span className="fa-stack fa-2x mt-3 mb-2">
//               <i className="fas fa-circle fa-stack-2x" />
//               <i className="fas fa-store fa-stack-1x fa-inverse" />
//             </span>
//             <h5 className="text-center" style={{cursor:"pointer"}}>Click to Upload your photo</h5>
//           </>
//         )}
//       </label>
//       <input
//         type="file"
//         id="upload-button"
//         style={{ display: "none" }}
//         onChange={handleChange}
//       />
//       <br />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// // >>>>>>> Stashed changes
// }

// export default DashBoard
