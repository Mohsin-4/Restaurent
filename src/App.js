import React,{useState} from 'react';
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';


function App() {
  console.log()

  let initialState = {
    users:[],
    componentIndex: 0 
  }
  const [state,setState] = useState(initialState);
  const {users} = state;

  const addUserHandler = user => {
  users.push(user)
  setState(prevState => ({
      ...prevState,
      users,
  }))
  alert("register Successfully")
}

const loginHandler = u =>{
    console.log(u);
      let loginUser = users.find(function(user){
        if (u.email === user.email && u.password === user.password){
          return user;
        }
      })
      if(loginUser){
        alert("login successfully");
      }
      else{
        alert("email or password incorrect")
      }
    };

  
  const componentHandler = idx => {
  setState(pre => ({...pre, componentIndex: idx}))
  }
  
  console.log('State :', state)
  return (
    <div className="App">
      <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', background: 'grey'}}>
      {
        ["Register", "Login", "Dashboard"].map(function (item, index){
        return <li key={index} style={{listStyle: "none", margin: 10, cursor: 'pointer', color: '#fff'}} onClick={ () => componentHandler(index)}> {item} </li>
        })
      }
      </ul>
      {
        // state.componentIndex === 0 ?
        // <Registration title="Registration" cb={addUserHandler} />
        // :
        // state.componentIndex === 1 ?
        // <Login title="Login" loginHandler={loginHandler} />
        // :
        <DashBoard title="DashBoard" />
      }
      <div id="app"></div>
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
