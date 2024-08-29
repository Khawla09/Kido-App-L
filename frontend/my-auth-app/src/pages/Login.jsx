import React,{useState, useEffect} from 'react'

import axios from "axios"
import {useNavigate} from "react-router-dom"
import "../styling/signup.css"
function Login() {

  const navigate = useNavigate()
  const [username, setUsername] =useState("");
  const [password, setPassword] = useState("");

  
  
  // not neccessarry
  useEffect(()=>{
    ftechUsers()
  },[])
  //fetch users
  const ftechUsers =async ()=>{
   const res = await axios.get("http://localhost:3005/api/user/register")
  // const data =   res.json(res.data)
  console.log(res.data)
    
  }

  //handle login
  const handleLogin =async(e)=>{
    e.preventDefault();
    try {
      const response =await axios.post('http://localhost:3005/api/user/login',{username,password});
      // Extract the token and userId from the response

      // const userId = response.data.userId; // Get userId from response
      const token = response.data.token;

      if (token) {  // Add a check here
        // loginUser(userId);  // Store userId in context
        localStorage.setItem('token', token);  // Optionally store the token
  
        setUsername('');
        setPassword('');
        navigate('/');
        // console.log("id of user",userId)
        alert("Logged In Successfulyy!")
      } else {

        alert('User ID is undefined.');
      }

    } catch (error) {
      alert("Unable to login")
    }
  }
  return (
    <div className='div-cont'>
      <div className="login-container">
       
        <form onSubmit={handleLogin}
        style={{display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center", padding:"10px"}} >
      <h1 >Login</h1>
    

      <label htmlFor="username">Username</label>
      <input placeholder='Enter a valid Username' name='username' type='text' required  onChange={(e)=>setUsername(e.target.value)} style={{padding:"10px"}}/>
   

      <label htmlFor="password">Password</label> 
      <input  placeholder='Enter a valid Password' name='password' type='password' required onChange={e=>setPassword(e.target.value)} style={{padding:"10px"}}/>
<br />
<button className='login-button' type='submit'>Login</button>

        </form>
      </div>
      <div>

      </div>
    </div>
  )
}
const formStyle ={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border:" 1px solid black",
 
}
export default Login
  