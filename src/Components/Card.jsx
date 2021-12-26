import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className="Card-Container">
            <img className="Card-image" key={props.title} src={props.url} className="Card-Image-CSS" width="100px"/>
            <span className="Card-Title">{props.title}</span>
        </div>
    )
}

export default Card
