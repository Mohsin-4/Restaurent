import React from 'react'

export default function ViewCart(props) {
    return (
        <div>
            <h1>Cart items</h1>
            <div className="container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'stretch', flexWrap: 'wrap' }}>
            {
                                  props.userCart.map((cartItem, j) => ( 
                                    <div key={j} className="card" style={{
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
                    
                                      }} className="img-div" src={cartItem.img} />
                                      <h4>{cartItem.name}</h4>
                                      <b>{cartItem.qty}</b>
                                      <button id="increment" onClick={() => props.quantityHandler(cartItem.id)} > + </button>
                                      <button id="decrement" onClick={() => props.quantityHandler(cartItem.id,2)}> - </button>
                                      <h4>{cartItem.totalPrice?cartItem.totalPrice : cartItem.price * cartItem.qty}</h4>
                                    </div>
                                  </div>
                                
                    ))
            }

                
        
            </div>
            
        </div>
    )
}
