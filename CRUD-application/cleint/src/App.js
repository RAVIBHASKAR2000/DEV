import React,{useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'

function App() {
   const [movieName,setMovieName] =  useState('');
   const [review,setReview]=  useState('');

  return (
    <div className="App">
     <h2>CRUD APPLICATION</h2>

     <div className="form">
     <label>Movie Name</label>
     <input type="text"  name="movieName " onchange={(e)=>{
      setMovieName(e.target.value);
     }}/>
     <label>Review</label>
     <input type="text"  name="review" onchange={(e)=>{
      setReview(e.target.value);
     }}/>
      <button onClick={submit}> Submit</button>
     </div>
    
    </div>
  );
}

export default App;
