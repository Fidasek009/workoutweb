import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        {/* <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/how-to'>How it works</Link>
                    <Link to='/how-to'>Lorem ipsum</Link>
                    <Link to='/how-to'>How it works</Link>
                    <Link to='/how-to'>How it works</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Your Mom</h2>
                    <Link to='/how-to'>How it works</Link>
                    <Link to='/how-to'>Lorem ipsum</Link>
                    <Link to='/how-to'>How it works</Link>
                    <Link to='/how-to'>How it works</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About WW2</h2>
                    <Link to='/how-to'>How it works</Link>
                    <Link to='/how-to'>Lorem ipsum</Link>
                    <Link to='/how-to'>How it works</Link>
                    <Link to='/how-to'>How it works</Link>
                </div>
            </div>
        </div> */}
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='https://www.instagram.com/explore/tags/broworkoutchallenge/' className="social-logo">
                        #BroWorkoutChallenge
                    </Link>
                </div>
                <small className="website-rights">Fidasek009 © 2023</small>
                <div className="social-icons">
                    <Link className="social-icon-link" to='https://www.instagram.com/fida_krasa/' target='_blank' aria-label='Instagram'>
                        <i class="fa-brands fa-instagram"/>
                    </Link>
                    <Link className="social-icon-link" to='https://www.linkedin.com/in/filip-krasa/' target='_blank' aria-label='LinkedIn'>
                        <i className="fab fa-linkedin"/>
                    </Link>
                    <Link className="social-icon-link" to='https://www.instagram.com/fida_krasa/' target='_blank' aria-label='GitHub'>
                        <i class="fa-brands fa-github"/>
                    </Link>
                    <Link className="social-icon-link" to='https://filipkrasa.kenolas.xyz' target='_blank' aria-label='Website'>
                        <i class="fa-solid fa-globe"/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer