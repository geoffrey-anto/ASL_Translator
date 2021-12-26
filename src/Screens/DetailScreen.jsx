import React from 'react'
import "./DetailScreen.css"
import DATA from '../Data/ASL_EXPLAIN_DATA'
import Card from '../Components/Card'

const clickHandler = (e) => {
    
}

const DetailScreen = () => {
    return (
        <div className="DetailScreen-Container">
            <div className="DetailScreen-Header">ASL CONVERTER</div>
            <div className="DetailScreen-Text-heading">What is American Sign Language?</div>
            <div className="DetailScreen-Text">American Sign Language (ASL) is a complete, natural language that has the same linguistic properties as spoken languages, with grammar that differs from English. ASL is expressed by movements of the hands and face. It is the primary language of many North Americans who are deaf and hard of hearing and is used by some hearing people as well.</div>
            <div className="DetailScreen-Image-Container">{DATA.map((data) => { return <Card url={require("../../src/ASL_DEMO_IMAGES/" + data.imgUrl)} key={data.imgName} title={data.imgName} /> })}</div>
            <div className="DetailScreen-Text">With this webapp you will be able to convert your ASL language alphabets to English alphabets using a Deep Learning Algorithm using The Convolutional Neural Networks</div>
            <button onClick={clickHandler} className="DetailScreen-Start" >Start Writing</button>
        </div>
    )
}

export default DetailScreen
