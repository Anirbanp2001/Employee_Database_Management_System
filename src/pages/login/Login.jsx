import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="container">
        <div className="title"><h2>Login as a Manager</h2></div>
                <form>
                    
                    <input type="email" placeholder='Enter Your Email Address' />
                    <input type="password" placeholder='Enter Your Password' />
                    <button className="button">Login</button>
                </form>
        </div>
    </div>
  )
}

export default Login