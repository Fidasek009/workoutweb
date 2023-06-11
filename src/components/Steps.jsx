import React from 'react'
import './Steps.css'

function Steps() {
  return (
    <>
        <div className="steps-container">
            <ul className="steps-items">
                <li className="steps-item left">
                    <h3>Find a challenge by looking up <a href="https://www.instagram.com/explore/tags/broworkoutchallenge/">#BROWORKOUTCHALLENGE</a></h3>
                    <img src="/images/how-to-bg.jpg" />
                </li>
                <li className="steps-item right">
                    <img src="/images/how-to-bg.jpg" />
                    <h3>Put the challenge on your story</h3>
                </li>
                <li className="steps-item left">
                    <h3>Record yourself doing the challenge</h3>
                    <img src="/images/how-to-bg.jpg" />
                </li>
                <li className="steps-item right">
                    <img src="/images/how-to-3.jpg" />
                    <h3>Add the Hashtag, a link to this website and your favorite workout music</h3>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Steps