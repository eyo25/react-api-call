import React, { useState, useEffect } from "react";
import './App.css';

import axios from "axios";
import Home from "./Compontes/Home";

const App= () => {
  const[leages,setleages]=useState([])
  const[loding,isLoding]=useState(true)
  useEffect( () => { 
    const fetchLeags=async () =>{
const result = await axios({
  "method": 'GET',
  "url": 'https://free-football-soccer-videos.p.rapidapi.com/',
  "headers": {
    'x-rapidapi-host': 'free-football-soccer-videos.p.rapidapi.com',
    'x-rapidapi-key': '62831d4d73msh8a27f61b4435970p1882e7jsna920e699d9c4'}
  })
  console.log(result.data)
  setleages(result.data)
    isLoding(false)
    }
    fetchLeags()
    
},[])
 
  return (
    <div className="App">
    <h1>React app</h1>
   <Home loding={loding} leages={leages} />
    </div>
  );
}

export default App;
