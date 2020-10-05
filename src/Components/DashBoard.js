import React, { useState } from 'react';
import './Dashboard.css'

function DashBoard() {
  let initStatet = {
    products: [
      { img: "https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800", name: "Biryani", price: "300" },
      { img: "https://hamariweb.com/recipes/images/recipeimages/469.jpg", name: "Chicken Karahi", price: "1300" },
      { img: "https://www.spendwithpennies.com/wp-content/uploads/2019/06/Grilled-BBQ-Chicken-SpendWithePennies-4.jpg", name: "Chicken BBQ", price: "1000" },
      { img: "https://sifu.unileversolutions.com/image/en-PK/recipe-topvisual/2/1260-709/darbari-malai-handi-50458173.jpg", name: "Chicken Handi", price: "1500" },
      { img: "https://lh3.googleusercontent.com/proxy/PzU0iDxhKxafZFUaS52k-O230HlxosUTUj4L3ENuCDpjq50pu6miIbK2SSBFW9mAsHVPVy4hMAE27g8UhrB9BN7_6I8ZZdLwnORTp4_MBiDQ3rpAtzRT6x-2pdyvfBygztSCWQ", name: "Chapli Kabab", price: "500" },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDEe1eJtLpTuMLtG-5f3WafHMHAk1OZISqzQ&usqp=CAU", name: "Fish Grill", price: "900" },
      { img: "https://ikneadtoeat.com/wp-content/uploads/2019/09/daal-mash-2.jpg", name: "Dall Mash", price: "200" },

    ]
  }
  const [state, setState] = useState(initStatet);
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
              }}>

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

                  }} className="img-div" src={`https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800`} />
                  <h4>{product.name}</h4>
                  <h4>{product.price}</h4>
                </div>
              </div>
            )
          })
        }

      </div>

    </div >
  )
}

export default DashBoard
