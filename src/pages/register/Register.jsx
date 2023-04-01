import React from 'react'
import "./register.css"
const Register = () => {
    return (
        <div className="register">
            <div className="container">
                <div className="title"><h2>Register as a Manager</h2></div>
                <form>
                    <input type="text" placeholder="Enter Your First Name" />
                    <input type="text" placeholder="Enter Your Last Name" />
                    <input type="text" placeholder="Enter Your Department Name" />
                    <input type="text" placeholder="Enter Your Company Name" />
                    <input type="email" placeholder='Enter Your Email Address' />
                    <input type="password" placeholder='Enter Your Password' />
                    <input type="password" placeholder='Re-enter your password' />
                    <button className="button">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
