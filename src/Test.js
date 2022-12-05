import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Nav from './header/Nav'
import Movie from './header/Movie';


function App () {
  const [movie , setMovie]=useState([]);

  const GetAllMovies =async ()=>{
    const res =await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=42a4d662eced405b29d897d493769d60&language=en-US&page=1');
    setMovie(res.data.results);
    console.log(movie);
  };

  useEffect(()=>{
    GetAllMovies()
  }, [])

 
  return (
    <div className="App">
      <Nav/>
      <Movie/>
      <Pagination/>
    </div>
  );
}

export default App;