import React from 'react'
import '../App.css'
import { Button } from './Button'
import './LandingPage.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>WELCOME</h1>
        <p>Are you ready for a challenge?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' href='/how-to'>JOIN US</Button>
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' href='/sign-up'>SIGN UP</Button> */}
        </div>
    </div>
  )
}

export default HeroSection