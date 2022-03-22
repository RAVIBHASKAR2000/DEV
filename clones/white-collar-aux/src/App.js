import React,{useEffect} from 'react';
import {
  BrowserRouter ,
  
} from "react-router-dom";
import background from "./body1.jpg";
import Main from "./Main.js";

function App() {
  return (
    <BrowserRouter>
    <div  style={{ backgroundImage: `url(${background})` }} className="App">
      <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
