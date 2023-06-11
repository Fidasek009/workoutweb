import React from 'react'
import './Steps.css'

function Steps() {
  return (
    <>
        <div className="steps-container">
            <ul className="steps-items">
                <li className="steps-item left">
                    <h3>Get challenged</h3>
                    <img src="/images/img-9.jpg" />
                </li>
                <li className="steps-item right">
                    <img src="/images/img-9.jpg" />
                    <h3>Record yourself doing the challenge</h3>
                </li>
                <li className="steps-item left">
                    <h3>Share a link to this site</h3>
                    <img src="/images/img-9.jpg" />
                </li>
                <li className="steps-item right">
                    <img src="/images/img-9.jpg" />
                    <h3>Add your favorte music</h3>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Steps