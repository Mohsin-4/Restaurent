import React, {useState} from 'react'

function Login(props) {
const {loginHandler} = props;

let initState = {
    email:"",
    password:""
}
const [state,setState] = useState(initState);

const {email,password} = state

const OnChangeHandler = (e) => {
    e.persist();
    var id = e.target.id;
    var value = e.target.value;
    setState(prevState => ({
        ...prevState,
        [id]: value
    }))
}
    const login = () => {
        loginHandler(state)
    }
console.log(state);
    return (
        <div>
           <h1>{props.title}</h1>
           <input type='text' id='email' value={email} placeholder='Enter your Email please' onChange={OnChangeHandler} /> <br /> 
           <input type='text' id='password' value={password} placeholder='Enter your Password please' onChange={OnChangeHandler} /> <br />
           <button onClick={login}> Login </button>
        </div>
 )
}

export default Login
