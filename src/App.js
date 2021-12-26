import React, { useEffect, useRef } from "react";
import DetailScreen from "./Screens/DetailScreen";
import "./App.css"

const App = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { width: 300 } })
  //     .then(stream => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch(err => {
  //       console.error("error:", err);
  //     });
  // };

  return (
    <div className="App-Main-Container">
      {/* <div>
        <button >Take a photo</button>
        <video ref={videoRef} />
      </div> */}
      <DetailScreen/>
    </div>
  );
};

export default App;