import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className="Card-Container">
            <img className="Card-image" src={props.urlmagesRef_Card} alt='' width="100px"/>
            <span className="Card-Title">{props.title_Card}</span>
        </div>
    )
}

export default Card
