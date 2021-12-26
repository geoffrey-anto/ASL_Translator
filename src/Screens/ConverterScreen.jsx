import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import Classes from "../Data/Classes_Mapping"
import "./ConverterScreen.css"

const ConverterScreen = () => {
    const videoRef = useRef(null);
    const [currPred,setCurrPred] = useState("");

    useEffect(() => {
      getVideo();
    }, [videoRef]);

    let model=undefined;
    const MODEL_URL = '/model/model.json'; 
  
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 300 , height: 300 } })
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play(videoRef.current);
        })
        .catch(err => {
          console.error("error:", err);
        });
    };

    useEffect(() => {
      async function loadModelASL() {
        model = await tf.loadLayersModel(MODEL_URL);
      }
      loadModelASL();
    },[currPred])

    async function takePhoto() {
        const videoElement = document.createElement('video');
        videoElement.width=256;
        videoElement.height=256;
        const config = {resizeWidth: 256,resizeheight: 256};
        const cam = await tf.data.webcam(videoElement,config).catch((err)=>{
          console.log("error:", err);
        });
        cam.capture().then((img)=>{
          let pixelSize=tf.scalar(255);
          img=img.div(pixelSize);
          img=tf.expandDims(img,0)
          const pred=model.predict(img);
          console.log(pred);
          const arr=pred.arraySync();
          for(let i=0;i<arr[0].length;i++) {
              if(arr[0][i]>0.5){
                setCurrPred(currPred+Classes[i]);
              }
          }})
          .catch((err)=>{
          console.log("error:", err);
        });
        
    }

    return (
      <div className="PhotoScreen-Main-Container">
           <video className="PhotoScreen-video" ref={videoRef} />
           <button onClick={takePhoto}>Take a photo</button>
           <div className="PhotoScreen-Output">{currPred}</div>
      </div>
    );
  };
  
  export default ConverterScreen;