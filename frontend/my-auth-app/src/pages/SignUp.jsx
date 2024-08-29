import React,{useState, useEffect, useContext} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

import { Link } from 'react-router-dom'
import "../styling/signup.css"
function SignUp() {
// const {signup} = useContext(AuthContext)
  const [user, setUsers] = useState([]);
  const [email, setEmail] =useState("");
  const [username, setUsername] =useState("");
  const [name, setName] =useState("");
  const [address, setAddress] =useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  //fetch users
  useEffect(()=>{
    ftechUsers()
  },[])
  //fetch users
  const ftechUsers =()=>{
   axios
   .get("http://localhost:3005/api/user/register")
   .then((res=>{
    console.log(res.data)
   }))
    
  }
  //handle register
   const handleRegister = (e)=>{
   
e.preventDefault();
axios.post("http://localhost:3005/api/user/register",{email, username,name, address, password})
.then(()=>{
  alert("Registered Successfully")
  setEmail(""),
  setUsername(""),
  setName(""),
  setAddress(""),
  setPassword(''),
  ftechUsers(),
  navigate("/login")
}).catch(error =>{
  console.log(error)
})
  }
  return (
    <div>
    
      <div className="container">
      {/* style={{display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center", padding:"10px"}} */}
        <form onSubmit={handleRegister} 
        >
          <h1>Sign Up</h1>
      <label htmlFor="email">Email</label>
      <input name='email' type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} required style={{padding:"10px"}}/>
      <br />

      <label htmlFor="username">Username</label>
      <input placeholder="Enter a valid username"name='username' type='text'  onChange={(e)=>setUsername(e.target.value)} style={{padding:"10px"} }/>
      <br />
      {/* <label htmlFor="name">Name</label>
      <input name='name' type='text'  onChange={(e)=>setName(e.target.value)} style={{padding:"10px"}}/>
      <br />
      <label htmlFor="address">Address</label>
      <input name='address' type='text'  onChange={(e)=>setAddress(e.target.value)} style={{padding:"10px"}}/>
      <br /> */}

      <label htmlFor="password">Password</label> 
      <input placeholder='Enter a valid password' name='password' type='password' onChange={e=>setPassword(e.target.value)} style={{padding:"10px"}} />
<br />
<button type='submit'>SignUp</button>

        </form>
      </div>
      <div>

      </div>
      
    </div>
  )
}


export default SignUp