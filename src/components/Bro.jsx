import React from 'react'
import { Link } from 'react-router-dom'
import './Bro.css'

function Bro(props) {
  return (
    <li>
        <Link className='bro' to={`https://www.instagram.com/${props.user}/`} target='_blank'>
            <img src={`/images/bro/${props.user}.jpg`} alt={props.user} />
            <b>@{props.user}</b>
        </Link>
    </li>
  )
}

export default Bro