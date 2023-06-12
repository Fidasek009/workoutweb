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
            We just want to promote exercise and have fun while doing it.
            If you are willing to try, we are on your side!<br></br>
            <br></br>
            <b>Some rules:</b>
            <ul>
              <li>In order to challenge others, you need to complete a challenge.</li>
              <li>You can only set 1 challenge per day.</li>
              <li>Don't make the challenges impossible for others.</li>
              <li>Failiure is also a success.</li>
              <li>We don't tolerate hate.</li>
            </ul>
            <br></br>
            Follow these steps below. ↓↓↓↓↓↓↓↓↓↓</p>
        </div>
      </div>
      <Steps />
    </>
  )
}