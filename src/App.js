import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './header/Nav'
import Movie from './header/Movie';
import Detailes from './header/Detailes'

function App () {
  const [Movies, setMovies] = useState([])
  const [pageCount, setPage]=useState(0)

  //Get All Data movies
  const GetAllData = async()=>{
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=42a4d662eced405b29d897d493769d60&language=en-US')
    setMovies(res.data.results)
    setPage(res.data.total_pages)
  }

    //Get Current page
    const GetPage = async(Page)=>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=42a4d662eced405b29d897d493769d60&language=en-US&page=${Page}`);
      setMovies(res.data.results)
      setPage(res.data.total_pages)

    }

  useEffect(()=>{
    GetAllData();
    console.log(Movies);

  },[])

  const Search = async(word)=>{
    if(word === ''){
      GetAllData();

    } else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=42a4d662eced405b29d897d493769d60&language=en-US&page=1&query=${word}&include_adult=false`)
    setMovies(res.data.results)
    setPage(res.data.total_pages)

  }

  }
 
  return (
    <div className="App">
      <Nav Search={Search}/>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Movie Movies={Movies} GetPage={GetPage} pageCount={pageCount}/>}/>
        <Route path='/Movie/:id' element={<Detailes/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
