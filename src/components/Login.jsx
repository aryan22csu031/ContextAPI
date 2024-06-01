import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const {setuser} = useContext(UserContext);
    const handlesubmit = (e)=> {
        e.preventDefault()
        setuser({username,password});
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}} />
      <input type="text" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
      <button type="submit" onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
