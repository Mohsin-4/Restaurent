import React, { useState } from 'react'

function Registration(props) {
    const { cb } = props;
     let initialState = {
        name: "",
        email: "",
        password: ""
     }
    const [state, setState] = useState(initialState);

    const { name, email, password } = state;

    const onChangeHandler = (e) => {
        e.persist();
        var id = e.target.id;
        var value = e.target.value;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const addUser = () => {
        cb(state)
        setState(pre => ({
            ...pre,
            name: initialState.name,
            email: initialState.email,
            password: initialState.password,
        }))
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <label>Name:</label> <input type="text" value={name} id="name" placeholder="Enter your Name" onChange={onChangeHandler} />
            <label>Email:</label> <input type="text" value={email} id="email" placeholder="Enter your Email" onChange={onChangeHandler} />
            <label>Password:</label> <input type="password" value={password} id="password" placeholder="Enter your Password" onChange={onChangeHandler} />
            <button onClick={addUser}> Register </button>
        </div>
    )
}

export default Registration
