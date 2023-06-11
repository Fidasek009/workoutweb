import React from 'react'
import '../../App.css'
import './HowTo.css'
import Footer from '../Footer'
import Steps from '../Steps'

export default function Howto() {
  return (
    <>
      {/* <h1 className='products'>Anyone can join</h1> */}
      <div className="howto">
        <div className="howto-text">
          <h2>How to join us</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, perspiciatis quibusdam at, nemo perferendis blanditiis vero voluptatum aliquam deserunt eligendi dolorem sequi obcaecati officia saepe quis, molestias ullam repellat ipsam.</p>
        </div>
      </div>
      <Steps />
      <Footer />
    </>
  )
}