import React from 'react'
import './navbar.scss'
import image from '../images/logos.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <img src={image}/>
        </div>
        <div className="center">
            <ul>
                <li>Home</li>
                <li>WorkSpace</li>
                <li>Update</li>
            </ul>
        </div>
        <div className="right">
            <span>Login</span>
            <span>Register</span>
        </div>
    </div>
  )
}

export default Navbar