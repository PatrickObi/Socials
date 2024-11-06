import React, {useState} from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    function sendData(){
      axios.post("http://localhost:3003/user", {
        name: name,
        email: email,
        password: password
      })
    }
    function handleSubmit(){
      sendData()
    }
  
    return (
      <div className='maindiv'>
        <div>
          <div className='header-container'>
            <Link to={"/signin"} className='mainheader'>Log In</Link>
            <Link to={"/signup"} className='mainheader2'>Sign Up</Link>
          </div>
  
          <form action="" >
            <div>
          <div className='forminput'> 
            <label htmlFor="name">Enter your name</label>
            <input type="text" id="name" placeholder="Your name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <br/>
            <div className='forminput'> 
            <label htmlFor="email">Enter your email</label>
            <input type="text" id="name" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <br/>
            <div className='forminput'>
            <label htmlFor="name">Enter your Password</label>
            <input type="text" id="name" placeholder="Your Password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
  
            </div>
            <br/>
            <button onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
    );
  }
  

export default Signup
