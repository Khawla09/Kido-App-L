import React,{useState, useEffect, useContext} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
// import { AuthContext } from '../components/AuthContext';
function SignUp() {
// const {signup} = useContext(AuthContext)
  const [user, setUsers] = useState([]);
  const [email, setEmail] =useState("");
  const [username, setUsername] =useState("");
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
axios.post("http://localhost:3005/api/user/register",{email, username, password})
.then(()=>{
  alert("Registered Successfully")
  setEmail(""),
  setUsername(""),
  setPassword(''),
  ftechUsers(),
  navigate("/login")
}).catch(error =>{
  console.log(error)
})
  }
  return (
    <div>
      <div className={formStyle}>
        <form onSubmit={handleRegister} 
        style={{display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center", padding:"10px"}} >
          
      <label htmlFor="email">Email</label>
      <input name='email' type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} style={{padding:"10px"}}/>
      <br />

      <label htmlFor="username">Username</label>
      <input name='username' type='text'  onChange={(e)=>setUsername(e.target.value)} style={{padding:"10px"}}/>
      <br />

      <label htmlFor="password">Password</label> 
      <input name='password' type='password' onChange={e=>setPassword(e.target.value)} style={{padding:"10px"}}/>
<br />
<button type='submit'>SignUp</button>

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
  backgroundColor:"red"
}

export default SignUp