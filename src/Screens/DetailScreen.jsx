import React from 'react'
import "./DetailScreen.css"
import DATA from '../Data/ASL_EXPLAIN_DATA'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

const DetailScreen = () => {
    

    return (
        <div className="DetailScreen-Container">

            <div className="DetailScreen-Header">ASL CONVERTER</div>

            <div className="DetailScreen-Text-heading">What is American Sign Language?</div>

            <div className="DetailScreen-Text">American Sign Language (ASL) is a complete, natural language that has the same linguistic properties as spoken languages, with grammar that differs from English. ASL is expressed by movements of the hands and face. It is the primary language of many North Americans who are deaf and hard of hearing and is used by some hearing people as well.</div>

            <div className="DetailScreen-Image-Container">{DATA.map((data) => { return <Card urlmagesRef_Card={require("../../src/ASL_DEMO_IMAGES/" + data.imgUrl)} key={data.imgName} title_Card={data.imgName} /> })}</div>

            <div className="DetailScreen-Text">With this webapp you will be able to convert your ASL language alphabets to English alphabets using a Deep Learning Algorithm and Convolutional Neural Networks</div>

            <Link to="/Convert"><button className="DetailScreen-Start" >Start Writing</button></Link>
            
        </div>
    )
}

export default DetailScreen
