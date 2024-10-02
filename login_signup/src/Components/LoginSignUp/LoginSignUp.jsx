import React, { useState } from 'react'
import './LoginSignUp.css'
import user from '../Assets/user.png'
import email from '../Assets/email.png'
import password from '../Assets/password.png'

const LoginSignUp = () => {
    const [title,setTitle] = useState("Sign Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="title">{title}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {title==="Login"?<div></div>:
            <div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            
            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {title==="Sign Up"?<div></div>:
        <div className="forgot-password">
        Forgot Password?<span> Click here</span>
        </div>
        }
        
        <div className="submit-container">
            <div className={title==="Login"?"submit change":"submit"} onClick={()=>{setTitle("Sign Up")}}>Sign Up</div>
            <div className={title==="Sign Up"?"submit change":"submit"} onClick={()=>{setTitle("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp
