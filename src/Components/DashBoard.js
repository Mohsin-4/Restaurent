import React, { useState } from 'react';
import './Dashboard.css'

function DashBoard() {
  let initStatet = {
    products: [
      { img: "https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800", name: "Biryani", price: "300" },
      { img: "https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800", name: "Biryani", price: "300" },
      { img: "https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800", name: "Biryani", price: "300" },
      { img: "https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800", name: "Biryani", price: "300" },
      { img: "https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800", name: "Biryani", price: "300" },
      { img: "https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800", name: "Biryani", price: "300" },
      { img: "https://static.toiimg.com/thumb/53096628.cms?imgsize=1832291&width=800&height=800", name: "Biryani", price: "300" },

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

                  }} className="img-div" src={product.img} />
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
