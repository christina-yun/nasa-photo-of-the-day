import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/index';

import NavBar from './components/NavBar';
import Header from './components/Header';
import PhotoInfo from './components/PhotoInfo';

import "./App.css";

function App() {
  const [photo, setPhoto] = useState(null);
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [photographer, setPhotographer] = useState(null);

  //fetch data from API
useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(res =>{
    console.log(res.data);
    setPhoto(res.data.url);
    setDate(res.data.date);
    setName(res.data.title);
    setDescription(res.data.explanation);
    setPhotographer(res.data.copyright);

  })
  .catch(err =>{
    console.error('Oops, please try again');
  })
})

  return (
    <div className="App">
      <NavBar /> 
      <Header />
      <PhotoInfo photo={photo} date ={date} name={name} description={description}  photographer={photographer} />
    </div>
  </div>
  );
}

export default App;
