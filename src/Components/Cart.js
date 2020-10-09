import React from 'react'

export default function Cart(props) {
    return (
        <div style={{ color: '#fff' }}>
            Cart items {props.userCart.length}
        </div>
    )
}
