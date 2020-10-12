import React from 'react'

export default function Cart(props) {

    return (
        <div style={{ color: '#fff', cursor: "pointer" }} onClick={() => props.componentHandler(3)}>
            Cart items {props.cartLength}
        </div>
    )
}
