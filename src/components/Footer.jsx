import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
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
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className="website-rights">TRVL © 2023</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook" to='/' target='_blank' aria-label='Facebook'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link twitter" to='/' target='_blank' aria-label='Twitter'>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="social-icon-link linkedin" to='/' target='_blank' aria-label='LinkedIn'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer