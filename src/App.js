import React, { useState } from 'react';
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import Cart from './Components/Cart';
import ViewCart from './Components/ViewCart';


function App() {
  // console.log()

  let initialState = {
    users: [],
    componentIndex: 0,
    userCart: [],
    cartLength: 0,
    cardIndex: null
  }
  const [state, setState] = useState(initialState);
  const { users } = state;
  // const { userCart } = state;

  const addUserHandler = user => {
    users.push(user)
    setState(prevState => ({
      ...prevState,
      users,
    }))
    alert("register Successfully")
  }

  const loginHandler = u => {
    console.log(u);
    let loginUser = users.find(function (user) {
      if (u.email === user.email && u.password === user.password) {
        return user;
      }
    })
    if (loginUser) {
      alert("login successfully");
    }
    else {
      alert("email or password incorrect")
    }
  };


  const componentHandler = idx => {
    setState(pre => ({ ...pre, componentIndex: idx }))
  }
  
  const addItemToCart = (item, idx) => {
    let findItem = state.userCart.find((doc, index) => {
      if(doc.id === item.id) return doc;
      else return false;
    });
    if(findItem){
      return quantityHandler(findItem.id);
    } else {
      state.userCart.push(item);
      setState(pre => ({ ...pre, userCart: state.userCart, cartLength: pre.cartLength + 1, cardIndex: idx }))
    }
//     let updatedList =  state.userCart.map((cartitem,i) => {
//       if (item.id===cartitem.id){
//         cartitem.qty = cartitem.qty+1;
//         cartitem.totalPrice = cartitem.price * cartitem.qty
//         return cartitem
//       }else {
// return cartitem;
//       }  
//     })
    // state.userCart.push(item);
    // setState(pre => ({ ...pre, userCart: state.userCart }))
          // setState(pre => ({...pre, userCart: updatedList }))
  
    // state.userCart.push(item);
    // setState(pre => ({ ...pre, userCart: state.userCart }))
  }

  const quantityHandler = (id, a) => {  
    console.log(id);
if (a===2){
  let updatedList =  state.userCart.map((cartitem,i) => {
    if (id===cartitem.id){
      cartitem.qty = cartitem.qty-1;
      cartitem.totalPrice = cartitem.price * cartitem.qty
      return cartitem;
    } else return cartitem;

  })
        setState(pre => ({...pre, userCart: updatedList, cartLength: pre.cartLength - 1 }))

}else{

  let updatedList =  state.userCart.map((cartitem,i) => {
     if (id===cartitem.id){
       cartitem.qty = cartitem.qty+1;
       cartitem.totalPrice = cartitem.price * cartitem.qty
       return cartitem;
     } else return cartitem;
 
   })
         setState(pre => ({...pre, userCart: updatedList, cartLength: pre.cartLength + 1 }))
}

      }

  console.log('State :', state)
  return (
    <div className="App">
      <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', background: 'grey' }}>
        {
          ["Register", "Login", "Dashboard"].map(function (item, index) {
            return <li key={index} style={{ listStyle: "none", margin: 10, cursor: 'pointer', color: '#fff' }} onClick={() => componentHandler(index)}> {item} </li>
          })
        }
        <li style={{ listStyle: "none", textAlign: 'right', width: "50%" }}>
          <Cart {...state} componentHandler={componentHandler} />
        </li>
      </ul>
      {
        state.componentIndex === 0 ?
          <Registration title="Registration" cb={addUserHandler} />
          :
          state.componentIndex === 1 ?
            <Login title="Login" loginHandler={loginHandler} />
            :
            state.componentIndex === 2 ?
            <DashBoard {...state} addItemToCart={addItemToCart} />
            :
            <ViewCart userCart={state.userCart} quantityHandler={quantityHandler} />

      }
      <div id="app">
      </div>
      {/* <div>
           <input type='text' id='name' value={state.name}  placeholder='Enter your Name please' onChange={onChangeHandler} />    <br /> 
           <input type='text' id='email' value={state.email}  placeholder='Enter your Email please' onChange={onChangeHandler} />    <br /> 
           <input type='text' id='password' value={state.password}  placeholder='Enter your Password please' onChange={onChangeHandler} />    <br />
           <button onClick={addUserHandler}>  Register </button>
      </div> */}
      {/* 
      <div>
      </div> */}

      {/* <div>
           <input type='text' id='email'  placeholder='Enter your Email please' onChange={onChangeHandler} />    <br /> 
           <input type='text' id='password'  placeholder='Enter your Password please' onChange={onChangeHandler} />    <br />
           <button onClick={()=> login()}>  Login </button>
      </div> */}
      {/*      
     <div>
      </div> */}

    </div>
  );
}

export default App;
