import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Look at some of our highlights!</h1>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItem 
                        src="/images/img-9.jpg"
                        text="Lorem impsum dolor set i fucked your mom yesterday lol"
                        label="Advanture"
                        path="/services"
                    />
                    <CardItem 
                        src="/images/img-2.jpg"
                        text="Lorem impsum"
                        label="Advanture"
                        path="/services"
                    />
                </ul>
                <ul className="cards-items">
                    <CardItem 
                        src="/images/img-3.jpg"
                        text="Lorem impsum"
                        label="Advanture"
                        path="/services"
                    />
                    <CardItem 
                        src="/images/img-4.jpg"
                        text="Lorem impsum"
                        label="Advanture"
                        path="/services"
                    />
                    <CardItem 
                        src="/images/img-5.jpg"
                        text="Lorem impsum"
                        label="Advanture"
                        path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards