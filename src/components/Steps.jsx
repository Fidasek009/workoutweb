import React from 'react'
import './Steps.css'

function Steps() {
  return (
    <>
        <div className="steps-container">
            <ul className="steps-items">
                <li className="steps-item left">
                    <h3>Get challenged</h3>
                    <img src="/images/how-to-1.jpg" alt="" />
                </li>
                <li className="steps-item right">
                    <img src="/images/how-to-2.jpg" alt="" />
                    <h3>Put the challenge on your story</h3>
                </li>
                <li className="steps-item left">
                    <h3>Record yourself doing the challenge</h3>
                    <img src="/images/how-to-3.jpg" alt="" />
                </li>
                <li className="steps-item right">
                    <img src="/images/how-to-4.jpg" alt="" />
                    <h3>Add the Hashtag, a link to this website and your favorite workout music</h3>
                </li>
                <li className="steps-item left">
                    <img src="/images/how-to-5.jpg" alt="" />
                    <h3>Challenge others</h3>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Steps