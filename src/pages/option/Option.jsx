import React from 'react'
import './option.scss'
import image1 from '../../components/images/manager.png'
import image2 from '../../components/images/employee.png'

const Option = () => {
  return (
    <div className="option">
        <div className="container">
            <div className="title"><h2>What's Your Position?</h2></div>
            <div className="options">
                <img src={image1} alt=''/>
                Employee Manager</div>
            <div className="options">
               <img src={image2} alt=''/>
                Employee
            </div>
        </div>
    </div>
  )
}

export default Option