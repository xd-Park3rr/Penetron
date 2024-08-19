import React,{useState} from 'react'
import './login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Contact = () => {

    // Insert data submission data here

    return(
        <section className="login">
            <login>
                <h2>Login</h2>
                <div className="input-box">
                    <input type="text" className="field" placeholder='Username' required/>
                </div>
                <div className="input-box">
                    <input type="password" className="field" placeholder="Password" required/>
                </div>
                <div className="forgot-password">
                   <br></br> <a href="#">Forgot password?</a>                
                </div> 
                    <button type="submit" className ="button1">Log In</button>
                {/* <div className="remember-me">
                    <input type="checkbox" className="checkbox">Remember me</input>
                </div> */}
                <div className="register">
                    <br></br><label>Don't have an account? <a href="#">Sign In</a></label>
                </div>
            </login>
        </section>
    )
} 

export default Contact