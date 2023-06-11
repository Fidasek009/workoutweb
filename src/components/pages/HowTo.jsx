import React from 'react'
// import '../../App.css'
import './HowTo.css'
import Steps from '../Steps'

export default function Howto() {
  return (
    <>
      {/* <h1 className='products'>Anyone can join</h1> */}
      <div className="howto">
        <div className="howto-text">
          <h2>ANYONE CAN JOIN!</h2>
          <p>You're welcome no matter the gender.
            We just want to promote exercise and hve fun while doing it.<br></br>
            <br></br>
            <b>Some rules:</b>
            <ul>
              <li>In order to challenge others, you need to complete a challenge.</li>
              <li>You can only set 1 challenge per day.</li>
              <li>Make the challenges possible for the average person.</li>
            </ul>
            <br></br>
            Follow these steps below. ↓↓↓↓↓↓↓↓↓↓</p>
        </div>
      </div>
      <Steps />
    </>
  )
}