import React,{useState, useEffect} from 'react'

import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useUser} from "../components/UserContext"
function Login() {
  // const [user, setUsers] = useState([]);
  const navigate = useNavigate()
  const [username, setUsername] =useState("");
  const [password, setPassword] = useState("");
  // const { loginUser } = useUser();
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
    <div>
      <div className={formStyle}>
        <form onSubmit={handleLogin}
        style={{display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center", padding:"10px"}} >
     
      <br />

      <label htmlFor="username">Username</label>
      <input name='username' type='text'  onChange={(e)=>setUsername(e.target.value)} style={{padding:"10px"}}/>
      <br />

      <label htmlFor="password">Password</label> 
      <input name='password' type='password' onChange={e=>setPassword(e.target.value)} style={{padding:"10px"}}/>
<br />
<button type='submit'>SignIn</button>

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
  