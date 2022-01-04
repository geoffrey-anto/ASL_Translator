import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import "./ConverterScreen.css"
import Classes from "../Data/Classes_Mapping"

const ConverterScreen = () => {

  const videoRef = useRef(null);

  const [currPred, setCurrPred] = useState("");

  const [model, setModel] = useState(undefined);

  const [loaded, setLoaded] = useState(false);

  const [displayMsg,setDisplayMsg] = useState(false);

  useEffect(() => {
    if(loaded) {
      setDisplayMsg("Loaded The Model!");
    } else {
      setDisplayMsg("Loading The Model...");
    }
  },[loaded])

  //Gets the video everytime the frame changes therefore an infinite loop
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const MODEL_URL = '/model/model.json';

  //This Function gets Video from the webcam and plays it on the screen
  const getVideo = () => {

    navigator.mediaDevices
      .getUserMedia({ video: { width: 400, height: 400 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play(videoRef.current);
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  //This Function Loads the model everytime the screen refreshes meaning it does not change on re-render
  useEffect(() => {

    async function loadModelASL() {

      console.log("loading model");

      //Load the model from local or server
      setModel(await tf.loadLayersModel(MODEL_URL));

    }

    loadModelASL().then(() => {

      console.log("Loaded Model");

      setLoaded(true);

    })
      .catch(err => { console.error("error:", err) });

  }, [])

  //To get image from camera feed and convert it to tensor format
  //With the tensor make prediction and make apropriate changes
  async function predictAnswer() {

    const videoElement = document.createElement('video');

    videoElement.width = 256;
    videoElement.height = 256;

    const config = { resizeWidth: 256, resizeheight: 256 };


    const cam = await tf.data.webcam(videoElement, config).catch((err) => {
      console.log("error:", err);
    });

    cam.capture().then((img) => {

      //Pre Process The Image From Camera Feed
      let pixelSize = tf.scalar(255);
      img = img.div(pixelSize);
      img = tf.expandDims(img, 0)

      //Predict The Class From tensorflow JS Model
      const pred = model.predict(img);

      //Convert Tensor of (1,29) shape to JavaScript Array of size (1,29)
      const arr = pred.arraySync();

      //Loop through the array and find the maximum probability value
      // and the currPred to the predicted class value
      for (let i = 0; i < arr[0].length; i++) {
        if (arr[0][i] > 0.5) {
          if (i === 26) {
            setCurrPred(currPred.substring(0, currPred.length - 1))
            continue;
          }
          setCurrPred(currPred + Classes[i]);
        }
      }
    })
      .catch((err) => {
        console.log("error:", err);
      });
  }

  // useEffect(() => {
  //   setInterval(function () {predictAnswer()}, 1000);
  // },[])

  return (

    <div className="PhotoScreen-Main-Container">

      <video className="PhotoScreen-video" ref={videoRef} />

      <div className="PhotoScreen_text_yay">{displayMsg}</div>

      <div className="PhotoScreen_button_container">

        <button className="PhotoScreen-button" onClick={predictAnswer}>Start</button>

        <button className="PhotoScreen-button" onClick={() => { setCurrPred(""); }}>Clear</button>

      </div>

      <div className="PhotoScreen-Output">{currPred}</div>

    </div>

  );
};

export default ConverterScreen;