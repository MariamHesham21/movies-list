import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Movie from './Movie';



const Detailes = () => {
  const Params =useParams();
  const [Deta,setDeta]=useState([])
  console.log(Params.id)
  

  const GetAllDetailes = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${Params.id}?api_key=42a4d662eced405b29d897d493769d60&language=en-US`);
    setDeta(res.data)
    console.log(res.data)
  } 

  useEffect(()=>{
    GetAllDetailes();
    console.log(Deta);

  },[])

  return (
    <div className='Detailes'>
      <div className='high-deta'>
        <img  src={'https://image.tmdb.org/t/p/w500/'+ Deta.poster_path} alt='movie-img'/>
        <div className='text-deta'>
          <p><span>MOVIE NAME:</span>{Deta.original_title}</p>
          <p><span>Release Date:</span>{Deta.release_date}</p>
          <p><span>Vote Count:</span>{Deta.vote_count}</p>
          <p><span>Evaluation:</span>{Deta.vote_average}</p>
        </div>
      </div>
      <div className='mid-deta'>
        <p><span>Movie Story:</span></p>
        <p>{Deta.overview}</p>
      </div>
      <div className='btn-deta'>
        <a href={Deta.homepage}>
        <button> Show Movie </button>
        </a>
        <Link to='/'>
        <button> Return </button>
        </Link>
      </div>
    </div>
  )
}

export default Detailes