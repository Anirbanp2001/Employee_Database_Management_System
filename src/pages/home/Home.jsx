import React from 'react'
import image from '../../components/images/front.jpg'
import image1 from '../../components/images/home1.jpg'
import image2 from '../../components/images/home2.jpg'
import './home.scss'

const Home = () => {
  return (
      <div className="home">
        <div className="first">
          <img src={image} alt='' />
          <div className="text">
            <h1>Employee </h1>
            <h1>Database </h1>
            <h1>Management </h1>
            <h1>System</h1>
          </div>
        </div>
          <div className="second">
            
              <div className="text">
                <h2 className='title'>Why we need a management system?</h2>
                <span>
                  A management system is a key tool in helping to streamline your
                  business processes and build-in efficiency. Implementation of the appropriate management system and certifying to the appropriate
                  standard to your business improves business performance and embed
                  safe and sustainable practices into your operations.
                </span>
              </div>

            <img src={image1} alt='' />
          </div>

        <div className="third">
          <img src={image2} alt='' />
          <div className="text">
            <h2 className='title'>Why we need a management system?</h2>
            <span>
              A management system is a key tool in helping to streamline your
              business processes and build-in efficiency. Implementation of the appropriate management system and certifying to the appropriate
              standard to your business improves business performance and embed
              safe and sustainable practices into your operations.
            </span>
          </div>

        </div>

      </div>
  )
}

export default Home