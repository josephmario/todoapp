import React, {useState} from "react";

export const LoginPage = ({loginTodo}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const loginBtn = () => {
        if(username === 'admin' && password === 'pass'){
            loginTodo(true)
            setError('')
        }else{
            setError('Username & password incorrect')
        }
    }
    return (
        <div>
            <br/>
            <br/>
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Please Enter Username" value={username} onChange={e => setUsername(e.target.value)}/>
            <br/>
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Please Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <br/>
            <br/>
            { error ? error : ''}
            <button type="submit" onClick={loginBtn}>Login</button>
        </div>
    )
}