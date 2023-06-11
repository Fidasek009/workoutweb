import React from 'react'
import './Bros.css'
import Bro from '../Bro'

function Bros() {
  return (
    <>
      <div className='bros'>
        <ul className='bros-list'>
          <Bro user="fida_krasa"/>
          <Bro user="jacob_yzol"/>
        </ul>
      </div>
    </>
  )
}

export default Bros