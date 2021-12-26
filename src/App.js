import React from 'react';
import DetailScreen from "./Screens/DetailScreen";
import "./App.css"
import ConverterScreen from './Screens/ConverterScreen';

const App = () => {

  return (
    <div className="App-Main-Container">
      <ConverterScreen/>
      {/* <PhotoScreen/> */}
    </div>
  );
};

export default App;